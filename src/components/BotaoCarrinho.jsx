import Badge from "./Badge";
import IconeCarrinho from "./IconeCarrinho";

function BotaoCarrinho({
    quantidadeItens = 0,
    onClick
}) {
    return (
        <button
            type="button"
            className="botao-menu botao-carrinho"
            aria-label={`Carrinho com ${quantidadeItens} itens`}
            onClick={onClick}
        >
            <IconeCarrinho />

            <Badge
                valor={quantidadeItens}
            />
        </button>
    );
}

export default BotaoCarrinho;