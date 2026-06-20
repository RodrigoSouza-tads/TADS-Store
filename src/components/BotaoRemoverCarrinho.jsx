import IconeLixeira from "./IconeLixeira";

function BotaoRemoverCarrinho({
onClick
}) {
return (

    <button
    
        type="button"
        className="botao-remover-carrinho"
        onClick={onClick}

        >
            <IconeLixeira className="botao-remover-carrinho-icone"/>

            <span>
                Remover
            </span>

    </button>
);

}

export default BotaoRemoverCarrinho;