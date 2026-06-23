import { Link } from "react-router-dom";

function BotaoVoltar ({
    to = "/",
    texto = "Home"
}){

    return(

        <Link 
            to={to}
            className="botao-voltar"
            aria-label={
                texto
                    ? `Voltar para ${texto}`
                    : "Voltar"
            }
        >
           <span>
            ← Voltar 
            {texto && ` para ${texto}`}
            </span> 
        </Link>
    )
}

export default BotaoVoltar;
