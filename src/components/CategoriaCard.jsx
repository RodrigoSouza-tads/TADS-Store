function CategoriaCard({
    nome,
    icone,
    onClick
}) {
    return (
        <button
            type="button"
            className="card-categoria"
            onClick={onClick}
        >
            <span className="card-categoria-icone">
                {icone}
            </span>

            <span className="card-categoria-nome">
                {nome}
            </span>
        </button>
    );
}

export default CategoriaCard;