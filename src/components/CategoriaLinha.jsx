import ProdutosCarousel from "./ProdutosCarousel";

function CategoriaLinha({
    titulo,
    produtos
}) {
    return (
        <section className="categoria-linha">

            <h2 className="categoria-linha-titulo">
                {titulo}
            </h2>

            <ProdutosCarousel
                produtos={produtos}
            />

        </section>
    );
}

export default CategoriaLinha;