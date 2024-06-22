import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { jwtDecode } from 'jwt-decode';
import { getRoleBasedOnToken, getCart } from '../service/api.js'; // Asegúrate de que las rutas sean correctas
import ItemFormEdit from '../components/ItemFormEdit.jsx';
import ListItem from "../components/ListItem.jsx";
import {Button} from "../components/Button.jsx";

export const Principal = () => {
    const navigate = useNavigate();
    const role = getRoleBasedOnToken();

    const handleClick=()=>{
        navigate("/item")
    }

    return (
        <div>
            {role === 'Admin' ? (
                <>
                    <div className="flex justify-between items-center">
                        <div className="flex-grow mr-4">
                            <ListItem/>
                        </div>
                        <div className="flex-shrink-0">
                            <button onClick={handleClick}>Crear Item</button>
                        </div>
                    </div>
                </>
            ) : (
                <ListItem/>
            )}
        </div>
    );
};
