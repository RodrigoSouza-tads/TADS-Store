import BarraBusca from "./BarraBusca";
import CarrinhoIcone from "./CarrinhoIcone";
import MenuNavegacao from "./MenuNavegacao";

function Cabecalho({
    titulo,
    itensMenu,
    busca,
    onBuscar,
    quantidadeCarrinho
}) {
    return (
        <header className="cabecalho">

            <h1>{titulo}</h1>

            <BarraBusca
                valor={busca}
                onChange={onBuscar}
            />

            <MenuNavegacao
                itens={itensMenu}
            />

            <CarrinhoIcone
                quantidadeItens={quantidadeCarrinho}
            />

        </header>
    );
}

export default Cabecalho;