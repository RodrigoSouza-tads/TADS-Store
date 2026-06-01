function CarrinhoIcone({
    quantidadeItens = 0,
    onClique
}) {
    return (
        <button
            type="button"
            className="carrinho-icone"
            onClick={onClique}
            aria-label="Carrinho de compras"
        >
            🛒

            {quantidadeItens > 0 && (
                <span className="carrinho-quantidade">
                    {quantidadeItens}
                </span>
            )}
        </button>
    );
}

export default CarrinhoIcone;