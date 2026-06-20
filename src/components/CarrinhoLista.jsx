import EstadoVazio from "./EstadoVazio";
import CarrinhoItem from "./CarrinhoItem";

function CarrinhoLista({
    produtos = []
}) {

    if (produtos.length === 0) {
        return (
            <EstadoVazio
                titulo="Seu carrinho está vazio"
                descricao="
                    Adicione produtos
                    para continuar.
                "
            />
        );
    }

    return (
        <section className="carrinho-lista">

            {produtos.map(
                (produto) => (
                    <CarrinhoItem
                        key={produto.id}
                        produto={produto}
                    />
                )
            )}

        </section>
    );
}

export default CarrinhoLista;