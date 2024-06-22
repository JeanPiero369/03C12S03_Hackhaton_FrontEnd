import React, { useEffect, useState, useRef } from "react";
import { getItems } from "../service/api.js";
import { Item } from "./Item.jsx";

export const ListItem = () => {
    const [items, setItems] = useState([]);
    const [lastKey, setLastKey] = useState(null);
    const [loading, setLoading] = useState(false);
    const containerRef = useRef(null);
    const [initialLimit, setInitialLimit] = useState(2); // Cantidad inicial de elementos a solicitar
    const [increaseFactor, setIncreaseFactor] = useState(2); // Factor de aumento para la cantidad de elementos
    const [itemsLimit, setItemsLimit] = useState(initialLimit); // Cantidad actual de elementos a solicitar en cada carga

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await getItems(itemsLimit, lastKey); // Pasa itemsLimit como parámetro
            setItems((prevItems) => [...prevItems, ...response.items]);
            setLastKey(response.lastKey);
            // Incrementa itemsLimit para la próxima carga
            setItemsLimit(itemsLimit + increaseFactor);
        } catch (error) {
            console.error('Fetch error:', error);
            // Manejo de errores aquí (mostrar mensaje de error al usuario, por ejemplo)
        }
        setLoading(false);
    };

    const handleScroll = () => {
        if (
            containerRef.current &&
            containerRef.current.scrollTop + containerRef.current.clientHeight >=
            containerRef.current.scrollHeight - 20 &&
            !loading
        ) {
            fetchData();
        }
    };

    return (
        <div
            className="flex justify-center items-center min-h-screen bg-gray-200"
            onScroll={handleScroll}
            ref={containerRef}
            style={{ overflowY: "auto", maxHeight: "80vh" }} // Ajusta maxHeight para limitar la altura del contenedor
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <Item
                            key={index}
                            asin={item.asin}
                            boughtInLastMonth={item.boughtInLastMonth}
                            isBestSeller={item.isBestSeller}
                            price={item.price}
                            imgUrl={item.imgUrl}
                            stars={item.stars}
                            title={item.title}
                        />
                    ))}
                    {loading && (
                        <p className="text-gray-700 text-base">Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListItem;
