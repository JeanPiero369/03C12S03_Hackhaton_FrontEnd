import React, { useEffect, useState } from 'react';
import { addItemToCart, removeItemFromCart, getCart } from '../service/api.js';

export const ShoppingCart = ({ userId }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const cart = await getCart(userId);
                setCartItems(cart.items);
            } catch (error) {
                console.error('Error fetching cart:', error);
            }
        };

        fetchCart();
    }, [userId]);

    const handleAddItem = async (itemId) => {
        try {
            await addItemToCart(itemId, userId);
            // Refetch the cart items
            const cart = await getCart(userId);
            setCartItems(cart.items);
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    const handleRemoveItem = async (itemId) => {
        try {
            await removeItemFromCart(itemId, userId);
            // Refetch the cart items
            const cart = await getCart(userId);
            setCartItems(cart.items);
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    return (
        <div>
            <h1>Carrito de Compras</h1>
            <ul>
                {cartItems.map(item => (
                    <li key={item.itemId}>
                        {item.title} - {item.quantity}
                        <button onClick={() => handleAddItem(item.itemId)}>Agregar</button>
                        <button onClick={() => handleRemoveItem(item.itemId)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
