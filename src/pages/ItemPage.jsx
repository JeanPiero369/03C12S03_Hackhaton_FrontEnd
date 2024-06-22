import {Item} from "../components/Item.jsx";
import React, {useEffect, useState} from "react";
import {getItem, getItems} from "../service/api.js";
import {ItemEdit} from "../components/ItemEdit.jsx";

export const ItemPage=()=>{
    const [item,setItem]=useState();


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        try {
            const response = await getItem("B0C4MJ6162"); // Pasa itemsLimit como parámetro
            setItem(response);
        } catch (error) {
            console.error('Fetch error:', error);
            // Manejo de errores aquí (mostrar mensaje de error al usuario, por ejemplo)
        }
    };
    /*
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Item
                    key={150}
                    asin={item.asin}
                    boughtInLastMonth={item.boughtInLastMonth}
                    isBestSeller={item.isBestSeller}
                    price={item.price}
                    imgUrl={item.imgUrl}
                    stars={item.stars}
                    title={item.title}
                />
            </div>
        </div>
     */
    return <>
        <ItemEdit/>
    </>
}