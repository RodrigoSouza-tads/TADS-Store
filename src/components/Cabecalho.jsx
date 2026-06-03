import CarrinhoIcone from "./CarrinhoIcone";
import MenuNavegacao from "./MenuNavegacao";

function Cabecalho({
    titulo,
    itensMenu,
    quantidadeCarrinho
}) {
    return (
        <header className="cabecalho">

            <h1>{titulo}</h1>


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