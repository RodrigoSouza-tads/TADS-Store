function formatarPeso(peso, categoria) {
    // Força a conversão para o tipo Number caso receba uma string
    const Peso = Number(peso);
    let PesoCorrigido = 0;
    
    // Verifica se o valor é um número válido
    if (isNaN(Peso)) {
        return "Valor inválido";
    }

    // Regras de negócio por categoria
    if (categoria === "laptops") {
        if (Peso > 2) {
            PesoCorrigido = Peso / 5;
        } else {
            PesoCorrigido = Peso;
        }
    } else if (categoria === "tablets") {
        if (Peso > 1) {
            PesoCorrigido = Peso / 5;
        } else {
            PesoCorrigido = Peso;
        }
    } else if (categoria === "smartphones") {
        PesoCorrigido = 0.15 + (Peso / 100);
    } else if (categoria === "mobile-accessories") {
        PesoCorrigido = Peso / 10;
    } else {
        // Caso venha uma categoria não mapeada, assume o peso original
        PesoCorrigido = Peso;
    }

    // Cria o formatador para o padrão brasileiro
    const formatador = new Intl.NumberFormat('pt-BR', {
        maximumFractionDigits: 2 // Evita dízimas periódicas longas no quilo
    });

    // Lógica de retorno baseada no valor do PesoCorrigido
    if (PesoCorrigido >= 1) {
        return `${formatador.format(PesoCorrigido)} kg`;
    } else {
        // Converte de kg para gramas (multiplica por 1000) e arredonda para inteiro
        const gramas = Math.round(PesoCorrigido * 1000);
        return `${formatador.format(gramas)} gramas`;
    }
}

export default formatarPeso;