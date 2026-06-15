import { useEffect, useState } from "react";

import BarraBusca from "../components/BarraBusca";
import CategoriaMenu from "../components/CategoriaMenu";
import Carregando from "../components/Carregando";
import EstadoVazio from "../components/EstadoVazio";
import ProdutosLista from "../components/ProdutosLista";


import { 
    buscarProdutos, 
    buscarCategorias, 
    buscarProdutosPorCategoria,
    nomesCategorias 
} from "../services/apiProdutos";


function ResultadosBusca({
    busca
}) {
    const [produtos, setProdutos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
    const [carregando, setCarregando] = useState(true);
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
            setCarregando(false);
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

    if (carregando) {
        return (
            <Carregando
                mensagem="Carregando produtos..."
            />
        );
    }

    if (erro) {
        return (
            <EstadoVazio
                titulo="Erro ao carregar produtos"
                descricao="Tente novamente mais tarde."
            />
        );
    }
    
    return (
        <section className="resultados-busca">          
            <h2>Resultados da Busca</h2>

            {produtosFiltrados.length === 0 ? (
                <EstadoVazio
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

export default ResultadosBusca;