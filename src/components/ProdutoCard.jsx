import Botao from "./Botao";
import Selo from "./Selo";
import formatarPreco from "../utils/formatarPreco";

function ProdutoCard({ produto }) {
    const {
        nome,
        preco,
        freteGratis
    } = produto;

    return (
        <article className="produto-card">
            <h3>{nome}</h3>

            <p className="preco">
                {formatarPreco(preco)}
            </p>

            {freteGratis && (
                <Selo texto="Frete grátis" />
            )}

            <Botao texto="Comprar" aoClicar={() => {}}/>
        </article>
    );
}

export default ProdutoCard;