import {useLocation, useNavigate} from "react-router-dom";

export const Button=(props)=>{
    const navigation=useNavigate();
    const location=useLocation();

    const handleOnClik=()=>{
        navigation(props.to);
    }

    const currentButton = location.pathname === props.to ? 'bg-primary text-white font-bold' : 'bg-secondary';

    return<>
        <button className={`${currentButton} mx-6 py-2 px-4 rounded-full cursor-pointer`} onClick={handleOnClik}>{props.text}</button>
    </>
}