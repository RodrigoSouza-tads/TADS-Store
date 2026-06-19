function formatarDesconto(desconto) {
    const descontoNumeroDecinal = Number(desconto)/100;
    return typeof descontoNumeroDecinal === "number"
        ? descontoNumeroDecinal.toLocaleString(
            "pt-BR",
            {
                style: "percent",
                minimumFractionDigits: 2, // Garante duas casas decimais
                maximumFractionDigits: 2  
            }
        )
        : "Desconto indisponível";
}


export default formatarDesconto;