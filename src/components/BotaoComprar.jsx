function BotaoComprar({
    texto = "Comprar",
    onClick,
    disabled = false
}) {
    return (
        <button
            type="button"
            className="botao-comprar"
            onClick={onClick}
            disabled={disabled}
        >
            {texto}
        </button>
    );
}

export default BotaoComprar;
