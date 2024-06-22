import React, { useEffect, useState } from 'react';
import { addItemToCart, removeItemFromCart, getCart } from '../service/api.js';
import {Item} from "../components/Item.jsx";
import {Button} from "../components/Button.jsx";

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
            <Item
                key={10}
                price={10}
                imgUrl=""
                title="A Pair of 1/2 Wave Receiver Antennas for Shure UHF-R,ULX,SLX,QLX-D,ULX-D,BLX4R Receivers"
            />
            <Button text="Comprar" to="/principal"/>
        </div>
    );
};
