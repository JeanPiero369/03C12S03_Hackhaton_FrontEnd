import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const BACKEND_URL = 'https://cepnq6rjbk.execute-api.us-east-1.amazonaws.com/';

// Obtiene el endpoint que corresponde al token
export const getRoleBasedOnToken = () => {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    return decodedToken.role;
};

// Registro de usuario
export const fetchRegister = async (body) => {
    try {
        const response = await axios.post(`${BACKEND_URL}auth/register`, body);
        localStorage.setItem('token', response.data.token);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};

// Login de usuario
export const fetchLogin = async (body) => {
    try {
        const response = await axios.post(`${BACKEND_URL}auth/login`, body);
        localStorage.setItem('token', response.data.token);
        return response.data;
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
};

// Crear un item
export const createItem = async (body) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${BACKEND_URL}items`, body, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating item:', error);
        throw error;
    }
};

// Editar un item
export const editItem = async (body) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.put(`${BACKEND_URL}items`, body, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error editing item:', error);
        throw error;
    }
};

// Eliminar un item
export const deleteItem = async (itemId) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`${BACKEND_URL}item/${itemId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting item:', error);
        throw error;
    }
};

// Obtener un item
export const getItem = async (itemId) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${BACKEND_URL}item/${itemId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching item:', error);
        throw error;
    }
};

// Obtener items con paginación
export const getItems = async (limit, lastKey) => {
    try {
        const response = await axios.get(`${BACKEND_URL}items`, {
            params: {
                limit,
                lastKey
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
};

// Hacer la compra de un carrito
export const buyCart = async (body) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${BACKEND_URL}buy`, body, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error buying cart:', error);
        throw error;
    }
};

// Agregar un item al carrito
export const addItemToCart = async (body) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${BACKEND_URL}cart`, body, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error adding item to cart:', error);
        throw error;
    }
};

// Eliminar un item del carrito
export const removeItemFromCart = async (body) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`${BACKEND_URL}cart`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: body
        });
        return response.data;
    } catch (error) {
        console.error('Error removing item from cart:', error);
        throw error;
    }
};

// Obtener el carrito de un usuario
export const getCart = async (userId) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${BACKEND_URL}cart/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching cart:', error);
        throw error;
    }
};
