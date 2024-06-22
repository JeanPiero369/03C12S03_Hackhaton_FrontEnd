import {useLocation, useNavigation} from "react-router-dom";
import {Button} from "../components/Button.jsx";

export const NotFound=()=>{
    const location=useLocation();

    return <>
        <h1>La pagina {location.pathname} no esta disponible</h1>
        <Button to="/auth/login" text="Regresar"/>
    </>
}