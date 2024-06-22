import { useState } from "react";
import { fetchRegister } from "../service/api.js" // Asegúrate de ajustar la ruta según sea necesario
import { InputForm } from "./InputForm.jsx";
import {useNavigate} from "react-router-dom";

export const RegisterForm = () => {
    const [data, setData] = useState({
        username: "",
        password: "",
        role: "Cliente" // O "Admin" dependiendo del rol que desees
    });

    const navigate = useNavigate();

    const handleChangeInput = (data2) => {
        const { name, value } = data2;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetchRegister(data);
            console.log("Registro exitoso:", response);
            navigate('/auth/login');
        } catch (error) {
            console.error("Error en el registro:", error);
            // Maneja el error, muestra un mensaje, etc.
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputForm initial={data.username} label="Username" name="username" onDataChange={handleChangeInput} />
            <InputForm initial={data.password} label="Password" name="password" onDataChange={handleChangeInput} />
            <label>
                Rol:
                <select name="role" value={data.role} onChange={handleChange}>
                    <option value="Cliente">Cliente</option>
                    <option value="Admin">Admin</option>
                </select>
            </label>
            <button
                id="loginSubmit"
                className="bg-primary text-white font-bold py-2 px-4 rounded-full w-full mb-4"
                type="submit"
            >
                Registrarse
            </button>
        </form>
    );
};
