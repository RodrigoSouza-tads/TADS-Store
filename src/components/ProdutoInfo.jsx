import BotaoComprar from "./BotaoComprar";
import Avaliacao from "./AvaliacaoEstrelas";
import BotaoFavorito from "./BotaoFavorito";
import IconeFreteGratis from "./IconeFreteGratis";
import formatarPreco from "../utils/formatarPreco";
import formatarDesconto from "../utils/formatarDesconto";
import GaleriaProduto from "./GaleriaProduto";
import { Link } from "react-router-dom";

function ProdutoInfo({ produto }) {
    const {
        id,
        nome,
        categoria,
        preco,
        imagem,
        imagens,
        avaliacao,
        desconto,
        freteGratis
    } = produto; 
    
    return (
            <article className="produto-info">



                <div className="produto-info-layout">

                    <GaleriaProduto
                        imagemPrincipal={imagens[0]}
                        imagens={imagens}
                        nome={nome}
                    />

                    <div className="produto-info-conteudo">

                        <div className="produto-info-topo">

                            {freteGratis && <IconeFreteGratis/>}

                            <BotaoFavorito />

                        </div>

                        <h3 className="produto-info-nome">
                            {nome}
                        </h3>

                        <Avaliacao nota={avaliacao} />

                        <p className="produto-info-preco">
                            {formatarPreco(preco)}
                        </p>


                        <div className="produto-info-botao">
                            <BotaoComprar texto="Comprar" aoClicar={() => {}}/>   

                        </div>

                     </div>

                </div>

            </article>
    );
}

export default ProdutoInfo;