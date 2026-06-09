import ProdutoCard from "./ProdutoCard";

function ProdutosLista({
    produtos
}) {
    return (
        <section className="produto-lista">
            {produtos.map((produto) => (
                <ProdutoCard
                    key={produto.id}
                    produto={produto}
                />
            ))}
        </section>
    );
}

export default ProdutosLista;