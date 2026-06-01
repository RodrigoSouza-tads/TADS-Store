function SeletorQuantidade({
    quantidade,
    onIncrementar,
    onDecrementar
}) {
    return (
        <div className="seletor-quantidade">
            <button
                type="button"
                onClick={onDecrementar}
                disabled={quantidade <= 1}
            >
                -
            </button>

            <span>
                {quantidade}
            </span>

            <button
                type="button"
                onClick={onIncrementar}
            >
                +
            </button>
        </div>
    );
}

export default SeletorQuantidade;