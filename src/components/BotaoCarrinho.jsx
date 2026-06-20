import Badge from "./Badge";
import IconeCarrinho from "./IconeCarrinho";
import { useCarrinho } from "../contexts/CarrinhoContext";
import { Link } from "react-router-dom";

function BotaoCarrinho({ onClick}) {
    const { itens } =
    useCarrinho();

    const quantidadeItens =
    itens.reduce(
        (total, item) =>
            total + item.quantidade,
        0
    );

    console.log(
        "Itens Carrinho:",
        itens
    );
    return (

        <Link
            to={`/carrinho`}
            className="link-sem-estilo"
        >
            <button
                type="button"
                className="botao-menu botao-carrinho"
                aria-label={`Carrinho com ${quantidadeItens} itens`}
                onClick={onClick}
            >
                <IconeCarrinho />

                <Badge valor={quantidadeItens} />

            </button>
        </Link>

    );
}

export default BotaoCarrinho;