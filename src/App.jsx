import './styles/App.css';
import { Navigate, Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { Navbar } from "./layout/Navbar.jsx";
import { Principal } from "./pages/Principal.jsx";
import { ShoppingCart } from "./pages/Cart.jsx"
import {ItemPage} from "./pages/ItemPage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/auth/login" />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/principal" element={<Principal />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/item" element={<ItemPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
