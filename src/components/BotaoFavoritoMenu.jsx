import IconeFavorito from "./IconeFavorito";
import { Link } from "react-router-dom";

function BotaoFavoritoMenu({
    onClick
}) {
    return (
        <Link
            to="/favoritos"
            className="link-sem-estilo"
        >
            
            <button
                type="button"
                className="botao-menu botao-favorito-menu"
                aria-label="Favoritos"
                onClick={onClick}
            >
                <IconeFavorito />
            </button>
        
        </Link>

    );
}

export default BotaoFavoritoMenu;