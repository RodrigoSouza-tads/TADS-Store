import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function RotaPrivada({
    children
}) {

    const {
        autenticado,
        carregando
    } = useAuth();

    if(carregando){

        return (
            <p>
                Carregando...
            </p>
        );

    }

    return autenticado
        ? children
        : <Navigate to="/login" replace />;

}

export default RotaPrivada;