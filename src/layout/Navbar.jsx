
import {useNavigate} from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita el envío del formulario
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        navigate('/auth/login');
    };

  if (localStorage.getItem('token')) {
    return (
      <div className="bg-black h-12 text-white px-10 py-2 flex justify-between">
        <div className='text-2xl'>Practica</div>
        <button onClick={handleSubmit}>Logout</button>
      </div>
    )
  } else {
    return (
      <div className="bg-black h-12 text-white px-10 py-2 text-2xl">IconoGeneral</div>
    )
  }
}
