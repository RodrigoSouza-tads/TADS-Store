import BotaoComprar from "./BotaoComprar";
import formatarPreco from "../utils/formatarPreco";
import { useNavigate } from "react-router-dom";
import { useCarrinho } from "../contexts/CarrinhoContext";

function CheckoutResumo({
    produtos = [],
    cliente={}
}) {

const navigate = useNavigate();

const {
    limparCarrinho
} = useCarrinho();

const quantidadeItens = produtos.reduce(
    (total, produto) =>
        total +
        (produto.quantidade || 0),
    0
);

const subtotal = produtos.reduce(
    (total, produto) =>
        total +
        (produto.preco || 0) *
        (produto.quantidade || 0),
    0
);

function confirmarPedido() {

    if (produtos.length === 0) {
        return;
    }

    if(!cliente.nome || !cliente.email){

        alert( "Preencha seus dados." );
        return;
    }

    limparCarrinho();
}

return (
    <aside className="checkout-resumo">

        <h2>
            Resumo do Pedido
        </h2>

        {produtos.map(
            (produto) => (

                <div
                    key={produto.id}
                    className="checkout-resumo-linha"
                >

                    <p className="checkout-resumo-nome">
                        {produto.nome}
                    </p>

                    <p>
                        Quantidade:
                        {" "}
                        {produto.quantidade}
                    </p>

                    <p>
                        Valor:
                        {" "}
                        {formatarPreco(
                            produto.preco *
                            produto.quantidade
                        )}
                    </p>

                </div>

            )
        )}

        <div className="checkout-resumo-linha">

            <p>
                Itens:
                {" "}
                {quantidadeItens}
            </p>

        </div>

        <div className="checkout-resumo-linha">

            <p className="checkout-resumo-total">

                Total:
                {" "}
                {formatarPreco(
                    subtotal
                )}

            </p>

        </div>

        <BotaoComprar
            texto="Confirmar Pedido"
            onClick={confirmarPedido}
        />

    </aside>
);

}

export default CheckoutResumo;