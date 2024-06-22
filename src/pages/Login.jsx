import { LoginForm } from "../components/LoginForm.jsx";
import { Button } from "../components/Button.jsx";

export const Login = () => {
    return (
        <>
            <section>
                <Button text="Iniciar Sesión" to="/auth/login" />
                <Button text="Registrarse" to="/auth/register" />
            </section>
            <LoginForm />
        </>
    );
};
