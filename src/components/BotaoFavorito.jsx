import IconeFavorito from "./IconeFavorito";
import {
useFavoritos
} from "../contexts/FavoritosContext";

function BotaoFavorito({
produto
}) {

const {
    alternarFavorito,
    ehFavorito
} = useFavoritos();

const favorito =
    ehFavorito(
        produto.id
    );

return (

    <button
        type="button"
        className="botao-favorito"
        onClick={() =>
            alternarFavorito(
                produto
            )
        }
        aria-label={
            favorito
                ? "Remover dos favoritos"
                : "Adicionar aos favoritos"
        }
    >

        <IconeFavorito
            preenchido={
                favorito
            }
        />

    </button>

);

}

export default BotaoFavorito;