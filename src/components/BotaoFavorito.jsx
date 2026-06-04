import { useState } from "react";

function BotaoFavorito() {
    const [favorito, setFavorito] =
        useState(false);

    function alternarFavorito() {
        setFavorito(
            (valorAtual) => !valorAtual
        );
    }

    return (
        <button
            type="button"
            className="botao-favorito"
            onClick={alternarFavorito}
            aria-label="Favoritar produto"
        >
            {favorito ? "❤️" : "🤍"}
        </button>
    );
}

export default BotaoFavorito;