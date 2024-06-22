import { Button } from "../components/Button.jsx";
import { RegisterForm } from "../components/RegisterForm.jsx";

export const Register = () => {
    return (
        <>
            <section>
                <Button text="Iniciar Sesión" to="/auth/login" />
                <Button text="Registrarse" to="/auth/register" />
            </section>
            <RegisterForm />
        </>
    );
};
