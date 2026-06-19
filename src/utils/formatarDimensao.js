function formatarDimensao(
    dimensao,
    categoria
) {

    if (
        isNaN(dimensao?.width) ||
        isNaN(dimensao?.height) ||
        isNaN(dimensao?.depth)
    ) {
        return null;
    }

    

    // Fator de conversão = 10 : representa conversão de Centimetro para Milimetro
    // Fator de conversão = 1 : está considerando que a unidade já está em Milimetro
    // Categoria "mobile-accessories" foi feito a conversão para milimetros em todas as dimensões por não haver padrão que se assemelha ao objeto físico
    const fatores = {
        "laptops": {
            largura: 10, 
            altura: 1,
            profundidade: 10
        },

        "tablets": {
            largura: 10,
            altura: 1,
            profundidade: 10
        },

        "smartphones": {
            largura: 10,
            altura: 10,
            profundidade: 1
        },

        "mobile-accessories": {
            largura: 10,
            altura: 10,
            profundidade: 10
        }
    };

    const fator =
        fatores[categoria] ?? {
            largura: 10,
            altura: 10,
            profundidade: 10
        };

    return {
        largura:
            Math.round(
                Number(dimensao.width) *
                fator.largura
            ),

        altura:
            Math.round(
                Number(dimensao.height) *
                fator.altura
            ),

        profundidade:
            Math.round(
                Number(dimensao.depth) *
                fator.profundidade
            )
    };
}

export default formatarDimensao;