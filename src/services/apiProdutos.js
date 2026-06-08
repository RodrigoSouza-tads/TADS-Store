const API_URL = "https://dummyjson.com/products";

const categorias = [
    "laptops",
    "mobile-accessories",
    "tablets",
    "smartphones"
];

function adaptarProduto(produto) {
    return {
        id: produto.id,
        nome: produto.title,
        preco: produto.price,
        descricao: produto.description,
        categoria: produto.category,
        avaliacao: produto.rating,
        imagem: produto.thumbnail,
        imagens: produto.images,
        estoque: produto.stock,
        marca: produto.brand,
        freteGratis: produto.price >= 500
    };
}

async function buscarCategoria(categoria) {
    const resposta = await fetch(
        `${API_URL}/category/${categoria}?limit=5`
    );

    if (!resposta.ok) {
        throw new Error(
            `Erro ao carregar a categoria: ${categoria}`
        );
    }

    const dados = await resposta.json();

    return dados.products.map(adaptarProduto);
}
async function respostasCategorias() {
    const respostasCategorias = await Promise.all(
        categorias.map(buscarCategoria)
    );
    return respostasCategorias;
}

export async function buscarProdutos() {


    const produtos =
        await respostasCategorias();

    return produtos.flat();
}

export async function buscarProdutosPorCategoria() {

    const respostas =
        await respostasCategorias();

    const produtosPorCategoria =
        categorias.reduce(
            (
                resultado,
                categoria,
                indice
            ) => {

                resultado[categoria] =
                    respostas[indice];

                return resultado;

            },
            {}
        );

    return produtosPorCategoria;
}

export async function buscarProdutoPorId(id) {
    const resposta = await fetch(
        `${API_URL}/${id}`
    );

    if (!resposta.ok) {
        throw new Error(
            `Produto ${id} não encontrado`
        );
    }

    const produto = await resposta.json();

    return adaptarProduto(produto);
}

export function buscarCategorias() {
    return categorias;
}

export const nomesCategorias = {
    "laptops": "Notebooks",
    "smartphones": "Smartphones",
    "tablets": "Tablets",
    "mobile-accessories": "Acessórios"
};