import BarraBusca from "./BarraBusca";
import CarrinhoIcone from "./CarrinhoIcone";
import MenuNavegacao from "./MenuNavegacao";

function Cabecalho({
    titulo,
    busca,
    onBuscar,
    itensMenu = [],
    quantidadeCarrinho = 0
}) {
    return (
        <header className="cabecalho">

            <div className="cabecalho-container">

                <div className="cabecalho-topo">

                    <div className="logo">
                        <h1 className="logo-titulo">
                            {titulo}
                        </h1>
                    </div>

                    <div className="cabecalho-busca">
                        <BarraBusca
                            valor={busca}
                            onChange={onBuscar}
                        />
                    </div>

                    <div className="cabecalho-acoes">

                        <CarrinhoIcone
                            quantidadeItens={
                                quantidadeCarrinho
                            }
                        />

                    </div>

                </div>

                <nav
                    className="cabecalho-navegacao"
                    aria-label="Categorias"
                >
                    <MenuNavegacao
                        itens={itensMenu}
                    />
                </nav>

            </div>

        </header>
    );
}

export default Cabecalho;