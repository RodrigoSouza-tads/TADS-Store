import BotaoComprar from "./BotaoComprar";
import Avaliacao from "./AvaliacaoEstrelas";
import BotaoFavorito from "./BotaoFavorito";
import IconeFreteGratis from "./IconeFreteGratis";
import formatarPreco from "../utils/formatarPreco";
import formatarDesconto from "../utils/formatarDesconto";
import { Link } from "react-router-dom";

function ProdutoCard({ produto }) {
    const {
        id,
        nome,
        categoria,
        preco,
        imagem,
        avaliacao,
        desconto,
        freteGratis
    } = produto;

   
    return (
               
        <article className="produto-card">

            <div className="produto-card-topo">

                {freteGratis && (
                    <IconeFreteGratis />
                )}

                <BotaoFavorito />

            </div>

            <Link
                to={`/produto/${id}`}
                className="link-sem-estilo"
            >

                <div className="produto-card-imagem">

                    <img
                        className="produto-imagem"
                        src={imagem}
                        alt={nome}
                        loading="lazy"
                    />

                </div>

                <div className="produto-card-informacoes">

                    <h3 className="produto-nome">
                        {nome}
                    </h3>

                    <Avaliacao
                        nota={avaliacao}
                    />

                    <p className="produto-preco">
                        {formatarPreco(preco)}
                    </p>

                    <span className="produto-desconto">
                        {formatarDesconto(desconto)} Off
                    </span>

                </div>

            </Link>

            <div className="produto-card-botao">

                <BotaoComprar
                    texto="Comprar"
                    aoClicar={() => {}}
                />

            </div>

        </article>

    );
}

export default ProdutoCard;