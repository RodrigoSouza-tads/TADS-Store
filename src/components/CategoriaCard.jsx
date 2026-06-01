function CategoriaCard({
    nome,
    icone,
    onClique
}) {
    return (
        <button
            type="button"
            className="card-categoria"
            onClick={onClique}
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