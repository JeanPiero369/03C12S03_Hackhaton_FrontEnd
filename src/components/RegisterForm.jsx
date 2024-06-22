import { useState } from "react";
import { fetchRegister } from "../service/api.js" // Asegúrate de ajustar la ruta según sea necesario
import { InputForm } from "./InputForm.jsx";

export const RegisterForm = () => {
    const [data, setData] = useState({
        username: "",
        password: "",
        role: "Cliente" // O "Admin" dependiendo del rol que desees
    });

    const handleChangeInput = (event) => {
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
            // Maneja la respuesta exitosa, redirección, etc.
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
                <select name="role" value={data.role} onChange={handleChangeInput}>
                    <option value="Cliente">Cliente</option>
                    <option value="Admin">Admin</option>
                </select>
            </label>
            <button type="submit">Registrarse</button>
        </form>
    );
};
