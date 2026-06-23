function Botao({
    texto = "",
    onClick,
   
}) {
    return (
        <button
            type="button"
            className="botao"
            onClick={onClick}
           
        >
            {texto}
        </button>
    );
}

export default Botao;
