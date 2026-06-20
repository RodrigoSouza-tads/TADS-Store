import Breadcrumb from "../components/Breadcrumb";
import EstadoVazio from "../components/EstadoVazio";
import CarrinhoLista from "../components/CarrinhoLista";
import CarrinhoResumo from "../components/CarrinhoResumo";
import { useCarrinho } from "../contexts/CarrinhoContext";
import { Link } from "react-router-dom";


function Carrinho() {

    const { itens } = useCarrinho();

    if (itens.length === 0) {

        return (
            <section className="pagina-carrinho">

                <Breadcrumb
                    itens={[
                        {
                            texto: "Home",
                            link: "/"
                        },
                        {
                            texto: "Carrinho"
                        }
                    ]}
                />

                <EstadoVazio
                    titulo="Seu carrinho está vazio"
                    descricao="Adicione produtos para continuar sua compra."
                />

                <Link 
                    to="/"
                    className="botao-detalhe-voltar"
                >
                    ← Voltar para a loja
                </Link>

            </section>
        );

    } else {
        return (
            <section className="pagina-carrinho">

                <Breadcrumb
                    itens={[
                        {
                            texto: "Home",
                            link: "/"
                        },
                        {
                            texto: "Carrinho"
                        }
                    ]}
                />            

                <h1 className="pagina-titulo">
                    Meu Carrinho
                </h1>

                <div className="carrinho-layout">

                    <CarrinhoLista
                        produtos={itens}
                    />

                    <CarrinhoResumo
                        produtos={itens}
                    />

                </div>


            </section>
        );

    }
}

export default Carrinho;