import { useEffect, useState } from "react";

import CategoriaMenu from "../components/CategoriaMenu";
import Carregando from "../components/Carregando";
import EstadoVazio from "../components/EstadoVazio";
import BannerPromocional from "../components/BannerPromocional";
import GaleriaProdutoCategoria from "../components/GaleriaProdutoCategoria";

import { 
    buscarProdutosPorCategoria,
    nomesCategorias 
} from "../services/apiProdutos";


function Home({
    busca = ""
}) {
    const [produtosPorCategoria,setProdutosPorCategoria] = useState({});
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(false);


    async function carregarProdutos() {
        try {
            const produtosApi = await buscarProdutosPorCategoria();

            setProdutosPorCategoria(produtosApi);
            console.log("Produtos por categoria:", produtosApi);

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
        <section className="home">

            <div className="conteiner-banner-promocional">
                <BannerPromocional
                    titulo="Tecnologia para seu dia a dia"
                    descricao="
                        Encontre notebooks,
                        smartphones, tablets e acessórios
                        com preços especiais.
                    "
                    textoBotao="Ver ofertas"
                    onCliqueBotao={() =>
                        window.scrollTo({
                            top: 600,
                            behavior: "smooth"
                        })
                    }
                />
            </div>

            
            <div className="conteiner-categoria-produtos">

                <GaleriaProdutoCategoria
                    produtosPorCategoria={
                        produtosPorCategoria
                    }
                    nomesCategorias={
                        nomesCategorias
                    }
                />

            </div>


        </section>
    );
}

export default Home;