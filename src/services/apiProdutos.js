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

export async function buscarProdutos() {
    const respostasCategorias = await Promise.all(
        categorias.map(buscarCategoria)
    );

    const produtos = respostasCategorias.flat();

    return produtos;
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