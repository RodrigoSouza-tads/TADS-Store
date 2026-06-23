import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import BotaoVoltar from "../components/BotaoVoltar";
import CheckoutFormulario from "../components/CheckoutFormulario";
import CheckoutResumo from "../components/CheckoutResumo";
import { useCarrinho } from "../contexts/CarrinhoContext";
import { useAuth } from "../contexts/AuthContext";

function Checkout() {

const { itens } = useCarrinho();
const { usuario } = useAuth();

const [dadosCliente,setDadosCliente] =
useState({
    nome:"",
    email:"",
    telefone:"",
    cpf:"",
    endereco:"",
    numero:"",
    cep:""
});

function alterarCliente(
    campo,
    valor
){
    setDadosCliente(
        estadoAtual => ({
            ...estadoAtual,
            [campo]:valor

        })
    );
}

useEffect(() => {

    if(usuario){

        setDadosCliente({

            nome: usuario.nome || "",
            email: usuario.email || "",
            telefone: usuario.telefone || "",
            cpf: usuario.cpf || "",
            endereco: usuario.endereco || "",
            numero: usuario.numero || "",
            cep: usuario.cep || ""

        });

    } else {

        setDadosCliente({
            nome:"",
            email:"",
            telefone:"",
            cpf:"",
            endereco:"",
            numero:"",
            cep:""
        });

    }

},[usuario]);

return (
    <section className="checkout">

        <Breadcrumb
            itens={[
                {
                    texto: "Home",
                    link: "/"
                },
                {
                    texto: "Carrinho",
                    link: "/carrinho"
                },
                {
                    texto: "Checkout"
                }
            ]}
        />

        <BotaoVoltar
            to="/carrinho"
            texto = "Carrinho"
        />

        <h1 className="pagina-titulo">
            Finalizar Compra
        </h1>

        <div className="checkout-layout">

            <CheckoutFormulario
                dadosCliente={dadosCliente}
                onAlterar={ alterarCliente}
                
            />

            <CheckoutResumo
                produtos={itens}
                cliente={dadosCliente}
            />

        </div>

    </section>
);

}

export default Checkout;