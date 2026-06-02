import ProdutoCard from "./ProdutoCard";

function ProdutosLista({
    produtos
}) {
    return (
        <section className="lista-produtos">
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