import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRoleBasedOnToken } from '../service/api.js'; // Ajusta la ruta según sea necesario
import Item from '../components/Item.jsx';

export const Principal = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState(null);

    useEffect(() => {
        const tokenRole = getRoleBasedOnToken();
        if (!tokenRole) {
            navigate('/auth/login');
        } else {
            setRole(tokenRole);
        }
    }, [navigate]);

    if (!role) {
        return null; // O un mensaje de carga, si lo prefieres
    }

    return (
        <div>
            <h1>Bienvenido a la página principal</h1>
            {role === 'Admin' ? (
                <Item userRole={role} />
            ) : (
                <p>No tienes acceso a la sección de administración.</p>
            )}
        </div>
    );
};