import {InputForm} from "./InputForm.jsx";
import {useEffect, useState} from "react";

export const LoginForm=()=>{
    const [data,setData]=useState({
        username : "aa",
        password:""
    });

    const handleChangeInput=(data2)=>{
        const { name, value } = data2;
        console.error(data2);
        setData({
            ...data,
            [name]: value
        });
    }


    return<>
        <InputForm initial={data.username} label="Username" name="username" onDataChange={handleChangeInput}/>
        <InputForm initial={data.password}  label="Password" name="password" onDataChange={handleChangeInput}/>
    </>
}