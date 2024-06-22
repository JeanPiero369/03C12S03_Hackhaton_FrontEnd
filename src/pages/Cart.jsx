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
                imgUrl="data:image/jpeg;base64,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"
                title="A Pair of 1/2 Wave Receiver Antennas for Shure UHF-R,ULX,SLX,QLX-D,ULX-D,BLX4R Receivers"
            />
            <Button text="Comprar" to="/principal"/>
        </div>
    );
};
