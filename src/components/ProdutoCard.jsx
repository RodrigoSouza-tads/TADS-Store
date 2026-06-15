import BotaoComprar from "./BotaoComprar";
import Selo from "./Selo";
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
        <Link to={`/produto/${produto.id}`}>
            
            <article className="produto-card">


                <div className="produto-card-topo">

                    {freteGratis && <IconeFreteGratis/>}

                    <BotaoFavorito />

                </div>
                
                <div className="produto-card-imagem">

                    <img className="produto-imagem"
                        src={imagem}
                        alt={nome}
                        loading="lazy"
                    />

                </div>

                <div className="produto-card-informacoes">

                    <h3 className="produto-nome">
                        {nome}
                    </h3>

                    <Avaliacao nota={avaliacao} />

                    <p className="produto-preco">
                        {formatarPreco(preco)}
                    </p>
                    

                </div>

                <div className="produto-card-botao">
                    <BotaoComprar texto="Comprar" aoClicar={() => {}}/>   

                </div>

            </article>

        </Link>

    );
}

export default ProdutoCard;