function formatarPreco(preco) {
    return typeof preco === "number"
        ? preco.toLocaleString(
            "pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }
        )
        : "Preço indisponível";
}

export default formatarPreco;