import AvaliacaoEstrelas from "./AvaliacaoEstrelas";

function ProdutoInfo({
    nome,
    preco,
    descricao,
    avaliacao
}) {
    const valorFormatado = typeof preco === "number"
        ? preco.toLocaleString(
            "pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }
        )
        : "Preço indisponível";

    return (
        <section className="produto-info">
            <h1>{nome}</h1>

            <AvaliacaoEstrelas
                nota={avaliacao}
            />

            <p className="produto-info-preco">
                {valorFormatado}
            </p>

            <p className="produto-info-descricao">
                {descricao}
            </p>
        </section>
    );
}

export default ProdutoInfo;