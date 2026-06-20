import SeletorQuantidade from "./SeletorQuantidade";
import IconeFreteGratis from "./IconeFreteGratis";
import formatarPreco from "../utils/formatarPreco";
import AvaliacaoEstrelas from "./AvaliacaoEstrelas";
import BotaoRemoverCarrinho from "./BotaoRemoverCarrinho";
import { useCarrinho } from "../contexts/CarrinhoContext";

function CarrinhoItem({produto}) {

    const { adicionarProduto, atualizarQuantidade, removerProduto } = useCarrinho();

    return (
        <article className="carrinho-item">

            <div className="carrinho-item-imagem">
                <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="carrinho-item-imagem"
                />
            </div>


            <div className="carrinho-item-info">

                <h3 className="carrinho-item-nome">
                    {produto.nome}
                </h3>

                <strong className="carrinho-item-valor">
                    Valor: {formatarPreco(
                        produto.preco * produto.quantidade
                    )}
                </strong>



            </div>

                <div className="carrinho-item-acoes">
                    <div className="carrinho-item-seletor">
                        <span>Quantidade:</span>
                        <SeletorQuantidade 
                            quantidade={produto.quantidade}
                            onIncrementar={() => adicionarProduto(produto)}
                            onDecrementar={() => atualizarQuantidade(produto.id, produto.quantidade - 1)}
                        />
                    </div>

                    <div className="carrinho-item-lixeira">
                        <BotaoRemoverCarrinho
                            onClick={() =>
                                removerProduto(produto.id)
                            }
                        />
                    </div>


                 </div>


        </article>
    );
}

export default CarrinhoItem;