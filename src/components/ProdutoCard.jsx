import Botao from "./Botao";
import Selo from "./Selo";

function ProdutoCard({ produto }) {
    const { nome, preco, freteGratis } = produto;
    const valor = typeof preco === "number"
        ? preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
        : "Preço indisponível";
    return (
        <article className="produto-card">
            <h3>{nome}</h3>
            <p className="preco">{valor}</p>
            {freteGratis && <Selo texto="Frete grátis"/>}
            <Botao texto="Comprar" />
        </article>
    );
}

export default ProdutoCard;