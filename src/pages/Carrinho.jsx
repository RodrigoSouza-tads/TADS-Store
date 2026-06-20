import Breadcrumb from "../components/Breadcrumb";
import CarrinhoLista from "../components/CarrinhoLista";
import CarrinhoResumo from "../components/CarrinhoResumo";
import { useCarrinho } from "../contexts/CarrinhoContext";

function Carrinho() {

    const { itens } = useCarrinho();

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

export default Carrinho;