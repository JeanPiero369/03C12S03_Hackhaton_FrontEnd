import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {fetchLogin, getRoleBasedOnToken} from "../service/api"; // Asegúrate de ajustar la ruta según sea necesario
import { InputForm } from "./InputForm.jsx";

export const LoginForm = () => {
    const [data, setData] = useState({
        username: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChangeInput = (data2) => {
        const { name, value } =data2;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await fetchLogin(data);
            localStorage.setItem('role', getRoleBasedOnToken());
            navigate('/principal');
        } catch (error) {
            console.error('Error en el inicio de sesión:', error);
            navigate('/auth/login');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputForm initial={data.username} label="Username" name="username" onDataChange={handleChangeInput} />
            <InputForm initial={data.password} label="Password" name="password" onDataChange={handleChangeInput} />
            <button
                id="loginSubmit"
                className="bg-primary text-white font-bold py-2 px-4 rounded-full w-full mb-4"
                type="submit"
            >
                Iniciar Sesión
            </button>
        </form>
    );
};
