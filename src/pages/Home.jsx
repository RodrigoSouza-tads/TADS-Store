import { useEffect, useState } from "react";

import Loading from "../components/Loading";
import EmptyState from "../components/EmptyState";
import ProdutosLista from "../components/ProdutosLista";

import { buscarProdutos } from "../services/apiProdutos";

function Home() {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(false);

   useEffect(() => {
        async function carregarProdutos() {
            try {
                const produtosApi =
                    await buscarProdutos();

                setProdutos(produtosApi);

                console.log("Produtos carregados:");
                console.log(produtosApi);

            } catch (error) {
                console.error(error);
                setErro(true);
            } finally {
                setLoading(false);
            }
        }

        carregarProdutos();
    }, []);

    if (loading) {
        return (
            <Loading mensagem="Carregando produtos..." />
        );
    }

    if (erro) {
        return (
            <EmptyState
                titulo="Erro ao carregar produtos"
                descricao="Tente novamente mais tarde."
            />
        );
    }

    if (produtos.length === 0) {
        return (
            <EmptyState
                titulo="Nenhum produto encontrado"
                descricao="Não existem produtos disponíveis."
            />
        );
    }

    return (
        <section className="home">
            <ProdutosLista produtos={produtos} />
        </section>
    );
}


export default Home;