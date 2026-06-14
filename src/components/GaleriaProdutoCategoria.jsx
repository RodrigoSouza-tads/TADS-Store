import CategoriaLinha from "./CategoriaLinha";

function GaleriaProdutoCategoria({
    produtosPorCategoria = {},
    nomesCategorias = {}
}) {
    return (
        <div className="galeria-produto-categoria">

            {Object.entries(
                produtosPorCategoria
            ).map(
                ([categoria, produtos]) => (

                    <CategoriaLinha
                        key={categoria}
                        titulo={
                            nomesCategorias[categoria]
                            || categoria
                        }
                        produtos={produtos}
                    />

                )
            )}

        </div>
    );
}

export default GaleriaProdutoCategoria;