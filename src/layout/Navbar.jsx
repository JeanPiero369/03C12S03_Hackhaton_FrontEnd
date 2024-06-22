import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { jwtDecode } from 'jwt-decode';

export const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = async (event) => {
        event.preventDefault(); // Evita el envío del formulario
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        navigate('/auth/login');
    };

    const handleCartClick = () => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            if (decodedToken.role === 'client') {
                navigate('/cart');
            } else {
                alert('No tienes permiso para acceder al carrito.');
            }
        } else {
            navigate('/auth/login');
        }
    };

    if (localStorage.getItem('token')) {
        return (
            <div className="bg-black h-12 text-white px-10 py-2 flex justify-between items-center">
                <div className='text-2xl'>Practica</div>
                <div className="flex items-center">
                    <ShoppingCartIcon 
                        className="cursor-pointer mr-4"
                        onClick={handleCartClick}
                    />
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="bg-black h-12 text-white px-10 py-2 text-2xl">IconoGeneral</div>
        );
    }
};
