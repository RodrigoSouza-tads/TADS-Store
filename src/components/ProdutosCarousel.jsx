import ProdutoCard from "./ProdutoCard";

function ProdutosCarousel({
    produtos = []
}) {
    return (
        <div className="produtos-carousel">

            {produtos.map((produto) => (
                <ProdutoCard
                    key={produto.id}
                    produto={produto}
                />
            ))}

        </div>
    );
}

export default ProdutosCarousel;