import IconeLixeira from "./IconeLixeira";

function BotaoRemoverCarrinho({
onClick
}) {
return (

    <button>
        <IconeLixeira className="botao-remover-carrinho-icone"/>

        <span>
            Remover
        </span>

    </button>
);

}

export default BotaoRemoverCarrinho;