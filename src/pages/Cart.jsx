import React, { useState } from 'react';
import { Item } from "../components/Item.jsx";

export const ShoppingCart = ({ userId }) => {
    const [cartItems, setCartItems] = useState([
        { asin: '1', price: 10, imgUrl: 'img1.png', stars: 4, title: 'Item 1', boughtInLastMonth: '1', isBestSeller: 'True' },
        { asin: '2', price: 20, imgUrl: 'img2.png', stars: 3, title: 'Item 2', boughtInLastMonth: '0', isBestSeller: 'False' },
        { asin: '3', price: 30, imgUrl: 'img3.png', stars: 5, title: 'Item 3', boughtInLastMonth: '1', isBestSeller: 'True' },
        { asin: '4', price: 40, imgUrl: 'img4.png', stars: 2, title: 'Item 4', boughtInLastMonth: '0', isBestSeller: 'False' },
        { asin: '5', price: 50, imgUrl: 'img5.png', stars: 4, title: 'Item 5', boughtInLastMonth: '1', isBestSeller: 'True' }
    ]);

    const handleRemoveItem = (asin) => {
        setCartItems(prevItems => prevItems.filter(item => item.asin !== asin));
    };

    const handleRemoveAllItems = () => {
        setCartItems([]);
    };

    return (
        <div>
            <h1>Carrito de Compras</h1>
            {cartItems.map(item => (
                <div key={item.asin} className="flex justify-between items-center">
                    <Item
                        asin={item.asin}
                        price={item.price}
                        imgUrl={item.imgUrl}
                        stars={item.stars}
                        title={item.title}
                        boughtInLastMonth={item.boughtInLastMonth}
                        isBestSeller={item.isBestSeller}
                    />
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
                        onClick={() => handleRemoveItem(item.asin)}
                    >
                        Eliminar
                    </button>
                </div>
            ))}
            {cartItems.length > 0 && (
                <div className="mt-4">
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleRemoveAllItems}
                    >
                        Eliminar todos los ítems
                    </button>
                </div>
            )}
        </div>
    );
};

