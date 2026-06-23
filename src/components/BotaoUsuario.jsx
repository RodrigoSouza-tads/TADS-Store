import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import IconeUsuario from "./IconeUsuario";

function BotaoUsuario({
    onClick
}) {

    const { autenticado } = useAuth();

    const navigate = useNavigate();

    function acessarUsuario(){
        if(autenticado){
            navigate( "/minha-conta" );
        }else{
            navigate("/login" );
        }
    }

    return (
        <button
            type="button"
            className="botao-menu botao-usuario"
            aria-label="Minha conta"
            onClick={acessarUsuario}
        >
            <IconeUsuario />
        </button>
    );
}

export default BotaoUsuario;