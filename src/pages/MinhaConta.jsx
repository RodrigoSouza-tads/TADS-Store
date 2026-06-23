import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import Breadcrumb from "../components/Breadcrumb";
import Botao from "../components/Botao";
import BotaoVoltar from "../components/BotaoVoltar"


function MinhaConta() {

    const {
        usuario,
        logout
    } = useAuth();


    const navigate = useNavigate();

    function sair(){
        logout();
        navigate("/");
    }

    if(!usuario){
        navigate("/login");
        return null;
    }

    return (

        <section className="minhaconta">

            <Breadcrumb
                itens={[
                    {
                        texto:"Home",
                        link:"/"
                    },
                    {
                        texto:"Minha Conta"
                    }
                ]}
            />

            <BotaoVoltar
                to="/"
                texto="Home"
            />

            <h1 className="pagina-titulo">
                Minha Conta
            </h1>

            <div className="minhaconta-card">

                <p>
                    <strong>
                        Nome:
                    </strong>

                    {" "}
                    {usuario.nome}
                </p>


                <p>
                    <strong>
                        E-mail:
                    </strong>
                    {" "}
                    {usuario.email}
                </p>


                <p>
                    <strong>
                        Telefone:
                    </strong>

                    {" "}
                    {usuario.telefone}
                </p>


                <p>
                    <strong>
                    CPF:
                    </strong>

                    {" "}
                    {usuario.cpf}
                </p>


                <p>
                    <strong>
                        Endereço:
                    </strong>

                    {" "}
                    {usuario.endereco},
                    {" "}
                    {usuario.numero}

                </p>


                <p>
                    <strong>
                        CEP:
                    </strong>
                        {" "}
                        {usuario.cep}
                </p>



                <Botao
                    texto="Sair"
                    onClick={ sair}
                />


            </div>


        </section>

    );


}


export default MinhaConta;