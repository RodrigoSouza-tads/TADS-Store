import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import Breadcrumb from "../components/Breadcrumb";
import BotaoComprar from "../components/BotaoComprar";


function Usuario() {

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

        <section className="pagina-usuario">

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

            <h1 className="pagina-titulo">
                Minha Conta
            </h1>



            <div className="usuario-card">

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



                <BotaoComprar
                    texto="Sair"
                    onClick={ sair}
                />


            </div>


        </section>

    );


}


export default Usuario;