import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { jwtDecode } from 'jwt-decode';
import { getRoleBasedOnToken, getCart } from '../service/api.js'; // Asegúrate de que las rutas sean correctas
import ItemFormEdit from '../components/ItemFormEdit.jsx';

export const Principal = () => {
    const navigate = useNavigate();
    const role=getRoleBasedOnToken();

    return (
        <div>

            {role === 'Admin' ? (
                <ItemFormEdit userRole={role} />
            ) : (
                <div>

                </div>
            )}
        </div>
    );
};
