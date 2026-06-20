function BotaoComprar({
    texto = "Comprar",
    onClick,
   
}) {
    return (
        <button
            type="button"
            className="botao-comprar"
            onClick={onClick}
           
        >
            {texto}
        </button>
    );
}

export default BotaoComprar;
