import {useEffect, useState} from "react";
import PropTypes from "prop-types";

export const InputForm=(props)=>{
    const [data,setData]=useState(props.initial);


    const handleChange=(event)=>{
        const { name, value } = event.target;
        setData(value);
        props.onDataChange({name : props.name,value});
    }

    return<>
        <div>
            <label>{props.label} : </label>
            <input name={props.name} value={data} onChange={handleChange}></input>
        </div>
    </>
}

