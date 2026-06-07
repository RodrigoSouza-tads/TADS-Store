import BotaoComprar from "./BotaoComprar";
import Selo from "./Selo";
import Avaliacao from "./AvaliacaoEstrelas";
import BotaoFavorito from "./BotaoFavorito";
import formatarPreco from "../utils/formatarPreco";

function ProdutoCard({ produto }) {
    const {
        id,
        nome,
        categoria,
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
                <div className="selo-frete-gratis">
                    {freteGratis && (<Selo texto="Frete grátis" />)}
                </div>
                

            </div>

            <div className="produto-card-botao">
                 <BotaoComprar texto="Comprar" aoClicar={() => {}}/>   

            </div>

            
                
        </article>
    );
}

export default ProdutoCard;