import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Carregando from "../components/Carregando";
import EstadoVazio from "../components/EstadoVazio";
import ProdutoInfo from "../components/ProdutoInfo"
import { 
    buscarProdutoPorId 
} from "../services/apiProdutos";

function Detalhe() {
    const { id } = useParams();
    const [produto, setProduto] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(false);


        async function carregarProduto() {
        try {
            const produtoIdApi = await buscarProdutoPorId (id);

            setProduto(produtoIdApi);
            console.log("Produto:", produtoIdApi);

        } catch (error) {
            console.error(
                "Erro ao carregar produto:",
                error
            );

            setErro(true);

        } finally {
            setCarregando(false);
        }
    }

    useEffect(() => {
        carregarProduto();
    }, []);

    if (carregando) {
        return (
            <Carregando
                mensagem="Carregando informações do produto..."
            />
        );
    }

    if (erro) {
        return (
            <EstadoVazio
                titulo="Erro ao carregar informações do produto."
                descricao="Tente novamente mais tarde."
            />
        );
    }

    return (
        <article className="detalhe">
            <Link to="/">← Voltar</Link>
            <ProdutoInfo produto={produto}/>
        </article>
    );
}
export default Detalhe;