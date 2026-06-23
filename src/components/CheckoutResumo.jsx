import Botao from "./Botao";
import BotaoVoltar from "./BotaoVoltar";
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

    if(produtos.length === 0){

        alert("Seu carrinho está vazio.");

        return;
    }

    const camposObrigatorios = [
        cliente.nome,
        cliente.email,
        cliente.telefone,
        cliente.cpf,
        cliente.endereco,
        cliente.numero,
        cliente.cep
    ];

    if(camposObrigatorios.some(campo => !String(campo|| "").trim())){
        alert("Preencha todos os dados.");
        return;
    }


    const pedido = {

        cliente,

        itens: produtos,

        total: subtotal,

        data: new Date().toISOString()

    };


    limparCarrinho();

    navigate("/pedido-confirmado");

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

            <Botao
                texto="Confirmar pedido"
                onClick={confirmarPedido}
                type="submit"
                form="checkout-form"
            />

    </aside>
);

}

export default CheckoutResumo;