import BotaoComprar from "./BotaoComprar";
import formatarPreco from "../utils/formatarPreco";

function CarrinhoResumo({
    produtos = []
}) {

    const subtotal = produtos.reduce(
        (total, produto) =>
            total + produto.preco * produto.quantidade,
        0
    );

    return (
        <aside className="carrinho-resumo">

            <h2>
                Resumo do Pedido
            </h2>

            <div className="carrinho-resumo-linha">
                <span>Subtotal: </span>
                <span>
                    {formatarPreco(subtotal)}
                </span>
            </div>

            <div className="carrinho-resumo-linha">
                <span>Frete Gratis</span>
                
            </div>

            <div className="carrinho-resumo-total">
                <span>Total: </span>
                <strong>
                    {formatarPreco(subtotal)}
                </strong>
            </div>

            <BotaoComprar
                texto="Finalizar Compra"
            />

        </aside>
    );
}

export default CarrinhoResumo;