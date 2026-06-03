import { useEffect, useState } from "react";

import BarraBusca from "../components/BarraBusca";
import CategoriaMenu from "../components/CategoriaMenu";
import Loading from "../components/Loading";
import EmptyState from "../components/EmptyState";
import ProdutosLista from "../components/ProdutosLista";

import { buscarProdutos, buscarCategorias } from "../services/apiProdutos";


function Home() {
    const [produtos, setProdutos] = useState([]);
    const [busca, setBusca] = useState("");
    const [categorias, setCategorias] = useState([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(false);


    async function carregarProdutos() {
        try {
            const produtosApi = await buscarProdutos();

            const categoriasApi =
                buscarCategorias();

            setProdutos(produtosApi);
            setCategorias(categoriasApi);

        } catch (error) {
            console.error(
                "Erro ao carregar produtos:",
                error
            );

            setErro(true);

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        carregarProdutos();
    }, []);

    const produtosFiltrados =
        produtos.filter((produto) => {
            const atendeBusca =
                produto.nome
                    .toLowerCase()
                    .includes(
                        busca.toLowerCase()
                    );

            const atendeCategoria =
                categoriaSelecionada === ""
                    ? true
                    : produto.categoria ===
                      categoriaSelecionada;

            return (
                atendeBusca &&
                atendeCategoria
            );
        });

    if (loading) {
        return (
            <Loading
                mensagem="Carregando produtos..."
            />
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

    return (
        <section className="home">

            <BarraBusca
                valor={busca}
                onChange={setBusca}
            />

            <CategoriaMenu
                categorias={categorias}
                categoriaSelecionada={
                    categoriaSelecionada
                }
                onSelecionarCategoria={
                    setCategoriaSelecionada
                }
            />            

            {produtosFiltrados.length === 0 ? (
                <EmptyState
                    titulo="Nenhum produto encontrado"
                    descricao="Tente outro termo de pesquisa."
                />
            ) : (
                <ProdutosLista
                    produtos={produtosFiltrados}
                />
            )}

        </section>
    );
}

export default Home;