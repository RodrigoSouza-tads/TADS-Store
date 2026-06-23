import { Link } from "react-router-dom";
import BotaoVoltar from "../components/BotaoVoltar";
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

        <BotaoVoltar />  

    </section>
);

}

export default ConfirmacaoPedido;