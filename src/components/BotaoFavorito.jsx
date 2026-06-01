function BotaoFavorito({
    favorito,
    onAlternarFavorito
}) {
    return (
        <button
            type="button"
            className="favorito-botao"
            onClick={onAlternarFavorito}
            aria-label={
                favorito
                    ? "Remover dos favoritos"
                    : "Adicionar aos favoritos"
            }
        >
            {favorito ? "❤️" : "🤍"}
        </button>
    );
}

export default BotaoFavorito;