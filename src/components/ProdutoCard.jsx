import Botao from "./Botao";
import Avaliacao from "./AvaliacaoEstrelas";
import BotaoFavorito from "./BotaoFavorito";
import IconeFreteGratis from "./IconeFreteGratis";
import formatarPreco from "../utils/formatarPreco";
import formatarDesconto from "../utils/formatarDesconto";
import { useCarrinho } from "../contexts/CarrinhoContext";
import { useToast } from "../contexts/ToastContext";

import { Link } from "react-router-dom";

function ProdutoCard({ produto }) {
    const {
        id,
        nome,
        categoria,
        preco,
        precoInicial,
        imagem,
        avaliacao,
        desconto,
        freteGratis
    } = produto;

   const { adicionarProduto } = useCarrinho();
    

    const { mostrarToast } = useToast();
    
    return (
               
        <article className="produto-card">

            <div className="produto-card-topo">

                {freteGratis && (
                    <IconeFreteGratis />
                )}

                <BotaoFavorito
                    produto={produto}
                />

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
                        className="produto-avaliacao"
                        nota={avaliacao}
                    />

                    <p className="produto-preco">
                        {formatarPreco(preco)}
                    </p>

                    <div className="produto-preco-e-desconto">
                        <span className="produto-preco-inicial">
                            ({formatarPreco(precoInicial)})
                        </span>
                        <span className="produto-desconto">
                            {formatarDesconto(desconto)} Off
                        </span>
                    </div>


                </div>

            </Link>

            <div className="produto-card-botao">

                <Botao
                    texto="Comprar"
                    onClick={() => {
                        adicionarProduto(produto);
                        mostrarToast( `${produto.nome} adicionado ao carrinho`);
                        
                    }}
                />
                
            </div>

        </article>

    );
}

export default ProdutoCard;