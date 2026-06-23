import { Link } from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";
import BotaoVoltar from "../components/BotaoVoltar";


function NaoEncontrado() {

    return (

        <section className="pagina-nao-encontrado">


            <Breadcrumb

                itens={[
                    {
                        texto:"Home",
                        link:"/"
                    },
                    {
                        texto:"Página não encontrada"
                    }
                ]}

            />


            <BotaoVoltar

                to="/"

                texto="Home"

            />



            <div className="nao-encontrado-card">


                <span className="nao-encontrado-codigo">

                    404

                </span>



                <h1>

                    Página não encontrada

                </h1>



                <p>

                    A página que você tentou acessar não existe
                    ou foi removida.

                </p>



                <Link

                    to="/"

                    className="nao-encontrado-link"

                >

                    Voltar para a página inicial

                </Link>


            </div>


        </section>

    );

}


export default NaoEncontrado;