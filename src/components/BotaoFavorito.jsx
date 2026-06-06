import { useState } from "react";
import IconeFavorito from "./IconeFavorito";

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
            aria-label={
                favorito
                    ? "Remover dos favoritos"
                    : "Adicionar aos favoritos"
            }
        >
            <IconeFavorito 
                preenchido={favorito}
            />

        </button>
    );
}

export default BotaoFavorito;