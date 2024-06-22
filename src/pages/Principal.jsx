import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { jwtDecode } from 'jwt-decode';
import { getCart } from '../service/api.js'; // Asegúrate de que las rutas sean correctas
import Item from '../components/Item.jsx';

export const Principal = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            setRole(decodedToken.role);
        } else {
            navigate('/auth/login');
        }
    }, [navigate]);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const userId = localStorage.getItem('id');
                if (userId) {
                    const cart = await getCart(userId);
                    setCartItems(cart.items);
                }
            } catch (error) {
                console.error('Error fetching cart:', error);
            }
        };

        if (role === 'client') {
            fetchCart();
        }
    }, [role]);

    const handleCartClick = () => {
        if (role === 'client') {
            navigate('/cart');
        } else {
            alert('No tienes permiso para acceder al carrito.');
        }
    };

    if (!role) {
        return null; // O un mensaje de carga, si lo prefieres
    }

    return (
        <div>
            <div className="flex justify-between items-center bg-black text-white p-4">
                <h1 className="text-2xl">Bienvenido a la página principal</h1>
                {role === 'client' && (
                    <ShoppingCartIcon 
                        className="cursor-pointer"
                        onClick={handleCartClick}
                    />
                )}
            </div>
            {role === 'Admin' ? (
                <Item userRole={role} />
            ) : (
                <div>
                    <p>No tienes acceso a la sección de administración.</p>
                    {role === 'client' && (
                        <div>
                            <h2>Tu Carrito</h2>
                            <ul>
                                {cartItems.map(item => (
                                    <li key={item.itemId}>
                                        {item.title} - {item.quantity}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
