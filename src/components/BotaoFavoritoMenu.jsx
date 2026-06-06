import IconeFavorito from "./IconeFavorito";

function BotaoFavoritoMenu({
    onClick
}) {
    return (
        <button
            type="button"
            className="botao-menu botao-favorito-menu"
            aria-label="Favoritos"
            onClick={onClick}
        >
            <IconeFavorito />
        </button>
    );
}

export default BotaoFavoritoMenu;