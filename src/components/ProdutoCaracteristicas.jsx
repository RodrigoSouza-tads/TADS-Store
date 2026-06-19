import formatarPeso from "../utils/formatarPeso"
import formatarDimensao from "../utils/formatarDimensao";

function ProdutoCaracteristicas({
    descricao,
    peso,
    dimensao,
    categoria
}) {

    const dimensoesFormatadas =
    formatarDimensao(
        dimensao,
        categoria
    );

    if (
        peso == null &&
        dimensao == null
    ) {
        return null;
    }

    return (
        <section className="produto-caracteristicas">
            <h2 className="produto-secao-titulo">
                Descrição
            </h2>

            <p className="produto-descricao">
                {descricao}
            </p>

            <h2 className="produto-secao-titulo">
                Especificações
            </h2>

            <div className="produto-caracteristicas-grid">


                <div className="produto-caracteristica">
                    <span className="produto-caracteristica-label">
                        Largura
                    </span>

                    <span className="produto-caracteristica-valor">
                        {dimensoesFormatadas?.largura} mm
                    </span>
                </div>

                <div className="produto-caracteristica">
                    <span className="produto-caracteristica-label">
                        Altura
                    </span>

                    <span className="produto-caracteristica-valor">
                        {dimensoesFormatadas?.altura} mm
                    </span>
                </div>

                <div className="produto-caracteristica">
                    <span className="produto-caracteristica-label">
                        Profundidade
                    </span>

                    <span className="produto-caracteristica-valor">
                        {dimensoesFormatadas?.profundidade} mm
                    </span>
                </div>

                
                <div className="produto-caracteristica">
                    <span className="produto-caracteristica-label">
                        Peso
                    </span>

                    <span className="produto-caracteristica-valor">
                        {formatarPeso(peso, categoria)}
                    </span>
                </div>

            </div>

        </section>
    );
}

export default ProdutoCaracteristicas;