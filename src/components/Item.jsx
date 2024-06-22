import React, { useState } from 'react';
import { createItem, editItem, deleteItem } from '../service/api.js'; // Ajusta la ruta según sea necesario

const Item = ({ userRole }) => {
    const [itemData, setItemData] = useState({
        itemId: "",
        boughtInLastMonth: 0,
        imgUrl: "",
        isBestSeller: false,
        price: 0.0,
        stars: 0,
        title: ""
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setItemData({
            ...itemData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleCreate = async () => {
        try {
            const response = await createItem(itemData);
            console.log('Item created:', response);
        } catch (error) {
            console.error('Error creating item:', error);
        }
    };

    const handleEdit = async () => {
        try {
            const response = await editItem(itemData);
            console.log('Item edited:', response);
        } catch (error) {
            console.error('Error editing item:', error);
        }
    };

    const handleDelete = async () => {
        try {
            const response = await deleteItem(itemData.itemId);
            console.log('Item deleted:', response);
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    if (userRole !== 'Admin') {
        return <p>No tienes permiso para acceder a esta sección.</p>;
    }

    return (
        <div>
            <h1>Administrar Items</h1>
            <form>
                <input
                    type="text"
                    name="itemId"
                    value={itemData.itemId}
                    onChange={handleChange}
                    placeholder="ID del Item (solo para editar/eliminar)"
                />
                <input
                    type="number"
                    name="boughtInLastMonth"
                    value={itemData.boughtInLastMonth}
                    onChange={handleChange}
                    placeholder="Compras en el último mes"
                />
                <input
                    type="text"
                    name="imgUrl"
                    value={itemData.imgUrl}
                    onChange={handleChange}
                    placeholder="URL de la imagen"
                />
                <label>
                    Best Seller:
                    <input
                        type="checkbox"
                        name="isBestSeller"
                        checked={itemData.isBestSeller}
                        onChange={handleChange}
                    />
                </label>
                <input
                    type="number"
                    name="price"
                    value={itemData.price}
                    onChange={handleChange}
                    placeholder="Precio"
                />
                <input
                    type="number"
                    name="stars"
                    value={itemData.stars}
                    onChange={handleChange}
                    placeholder="Estrellas"
                    max="5"
                    min="0"
                />
                <input
                    type="text"
                    name="title"
                    value={itemData.title}
                    onChange={handleChange}
                    placeholder="Título"
                />
                <button type="button" onClick={handleCreate}>Crear Item</button>
                <button type="button" onClick={handleEdit}>Editar Item</button>
                <button type="button" onClick={handleDelete}>Eliminar Item</button>
            </form>
        </div>
    );
};

export default Item;
