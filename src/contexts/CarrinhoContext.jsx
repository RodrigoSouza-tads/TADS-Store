import {
    createContext,
    useContext,
    useState
} from "react";

const CarrinhoContext =
    createContext();

export function CarrinhoProvider({
    children
}) {

    const [itens,
        setItens] = useState([]);

    function adicionarProduto(
        produto
    ) 
    
    {
        console.log(  "Adicionando:", produto);

        setItens((estadoAtual) => {

                console.log(
                    "Estado atual:",
                    estadoAtual
                );

            const produtoExistente =
                estadoAtual.find(
                    (item) =>
                        item.id === produto.id
                );

            if (produtoExistente) {

                return estadoAtual.map(
                    (item) =>
                        item.id === produto.id
                            ? {
                                  ...item,
                                  quantidade:
                                      item.quantidade + 1
                              }
                            : item
                );
            }

            return [
                ...estadoAtual,
                {
                    ...produto,
                    quantidade: 1
                }
            ];
        });
    }

    function removerProduto(id) {

        setItens(
            (estadoAtual) =>
                estadoAtual.filter(
                    (item) =>
                        item.id !== id
                )
        );
    }

    function atualizarQuantidade(id, novaQtd) {

        if (novaQtd <= 0) { 
            removerProduto(id); 
            return; 
        }

        setItens((estadoAtual) =>
            estadoAtual.map((item) =>
                item.id === id ? { 
                    ...item, quantidade: novaQtd 
                } : item
            )
        );
    }

    return (
        <CarrinhoContext.Provider
            value={{
                itens,
                adicionarProduto,
                removerProduto,
                atualizarQuantidade
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    );
}

export function useCarrinho() {
    return useContext(
        CarrinhoContext
    );
}

