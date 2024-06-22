import {InputForm} from "./InputForm.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {fetchLogin} from "../service/api.js";

export const LoginForm=()=>{
    const [data,setData]=useState({
        username : "aa",
        password:""
    });

    const navigate = useNavigate();

    const handleChangeInput=(data2)=>{
        const { name, value } = data2;
        console.error(data2);
        setData({
            ...data,
            [name]: value
        });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await fetchLogin(data);
            navigate('/principal');
        } catch (error) {
            navigate('/auth/login');
        }
    };


    return<>
        <form onSubmit={handleSubmit}>
            <InputForm initial={data.username} label="Username" name="username" onDataChange={handleChangeInput}/>
            <InputForm initial={data.password} label="Password" name="password" onDataChange={handleChangeInput}/>
            <button
                id="loginSubmit"
                className="bg-primary text-white font-bold py-2 px-4 rounded-full w-full mb-4"
                type="submit">
                Iniciar Sesión
            </button>
        </form>
    </>
}