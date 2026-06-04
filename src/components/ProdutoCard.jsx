import Botao from "./Botao";
import Selo from "./Selo";
import Avaliacao from "./AvaliacaoEstrelas";
import BotaoFavorito from "./BotaoFavorito";
import formatarPreco from "../utils/formatarPreco";

function ProdutoCard({ produto }) {
    const {
        nome,
        preco,
        imagem,
        avaliacao,
        freteGratis
    } = produto;

    return (
        <article className="produto-card">


            <div className="produto-card-topo">
                <BotaoFavorito />
            </div>

            <img className="produto-imagem"
                src={imagem}
                alt={nome}
                loading="lazy"
            />

            <h3>{nome}</h3>

            <p className="preco">
                {formatarPreco(preco)}
            </p>

            {freteGratis && (
                <Selo texto="Frete grátis" />
            )}

            <Avaliacao nota={avaliacao} />

            <Botao texto="Comprar" aoClicar={() => {}}/>
        </article>
    );
}

export default ProdutoCard;