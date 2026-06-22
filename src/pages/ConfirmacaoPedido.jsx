import { Link } from "react-router-dom";

function ConfirmacaoPedido() {

return (
    <section className="pedido-confirmado">

        <h1>
            Pedido realizado com sucesso!
        </h1>

        <p>
            Obrigado por comprar na
            TADS Store.
        </p>

        <Link
            to="/"
            className="botao-comprar"
        >
            Voltar para a Home
        </Link>

    </section>
);

}

export default ConfirmacaoPedido;