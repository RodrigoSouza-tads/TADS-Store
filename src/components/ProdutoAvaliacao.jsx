import Avaliacao from "./AvaliacaoEstrelas";

function ProdutoAvaliacao({
    reviews = []
}) {

    if (reviews.length === 0) {
        return null;
    }

    return (
        <section className="produto-avaliacoes">

            <h2 className="produto-secao-titulo">
                Avaliações dos Clientes
            </h2>

            <div className="produto-avaliacoes-lista">

                {reviews.map(
                    (review, indice) => (

                        <article
                            key={indice}
                            className="produto-avaliacao"
                        >

                            <header
                                className="produto-avaliacao-topo"
                            >

                                <strong>
                                    {
                                        review.reviewerName
                                    }
                                </strong>

                                <Avaliacao
                                    nota={
                                        review.rating
                                    }
                                />

                            </header>

                            <p>
                                {review.comment}
                            </p>

                        </article>

                    )
                )}

            </div>

        </section>
    );
}

export default ProdutoAvaliacao;