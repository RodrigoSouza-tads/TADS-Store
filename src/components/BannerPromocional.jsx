function BannerPromocional({
    titulo,
    descricao,
    textoBotao,
    onCliqueBotao
}) {
    return (
        <section className="banner-promocional">
            <h2>{titulo}</h2>

            <p>{descricao}</p>

            <button
                type="button"
                onClick={onCliqueBotao}
            >
                {textoBotao}
            </button>
        </section>
    );
}

export default BannerPromocional;