
import {useNavigate} from "react-router-dom";
import ItemFormEdit from "../components/ItemFormEdit.jsx";
import React from "react";

export const Navbar = () => {
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita el envío del formulario
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        navigate('/auth/login');
    };

    const handleSubmit2 = async (event) => {
        event.preventDefault(); // Evita el envío del formulario
        navigate('/cart');
    };


  if (localStorage.getItem('token')) {
    return (
        <div className="bg-black h-12 text-white px-10 py-2 flex justify-between">
            <div className='text-2xl'>Practica</div>
            {localStorage.getItem('role') === 'Cliente' ? (
                <button onClick={handleSubmit2}>
                    <img src="data:image/png;base64,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" alt="Carrito" style={{ width: '35px', height: '35px', marginRight: '8px' }} />
                    Carrito
                </button>
            ) : (
                <div>
                </div>
            )}
            <button onClick={handleSubmit}>Logout</button>
        </div>
    )
  } else {
      return (
          <div className="bg-black h-12 text-white px-10 py-2 text-2xl">IconoGeneral</div>
    )
  }
}
