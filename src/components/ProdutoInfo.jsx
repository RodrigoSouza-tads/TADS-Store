import BotaoComprar from "./BotaoComprar";
import Avaliacao from "./AvaliacaoEstrelas";
import BotaoFavorito from "./BotaoFavorito";
import IconeFreteGratis from "./IconeFreteGratis";
import GaleriaProduto from "./GaleriaProduto";
import ProdutoCaracteristicas from "./ProdutoCaracteristicas";
import ProdutoAvaliacao from "./ProdutoAvaliacao";


import formatarPreco from "../utils/formatarPreco";
import formatarDesconto from "../utils/formatarDesconto";

import { useCarrinho } from "../contexts/CarrinhoContext";
import { Link } from "react-router-dom";

function ProdutoInfo({ produto }) {
    const {
        id,
        nome,
        descricao,
        categoria,
        preco,
        peso,
        dimensao,
        imagens,
        avaliacao,
        avaliacaoClientes,
        desconto,
        freteGratis
    } = produto; 

    const {
        adicionarProduto
    } = useCarrinho();
    
    console.log(useCarrinho());

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

                        <Avaliacao 
                            className="produto-info-avaliacao"
                            nota={avaliacao} />

                        <div className="produto-info-valores">
                            <p className="produto-info-preco">
                                {formatarPreco(preco) } 
                            </p>
                            <span className="produto-info-desconto">
                                {formatarDesconto(desconto)} de Desconto
                            </span> 
                        </div>
                       

                        <div className="produto-info-botao">
                            <BotaoComprar 
                                texto="Comprar" 
                                onClick={() =>{
                                    console.log("Clique ProdutoInfo");
                                    adicionarProduto(produto);
                                }}
                                
                            />   
                            
                        </div>

                     </div>

                    <ProdutoCaracteristicas
                        peso={peso}
                        dimensao={dimensao}
                        categoria={categoria}
                        descricao={descricao}
                    />

                    <ProdutoAvaliacao
                        reviews={avaliacaoClientes}
                    />

                </div>

            </article>
    );
}

export default ProdutoInfo;