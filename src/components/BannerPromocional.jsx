function BannerPromocional({
    titulo = "Tecnologia para seu dia a dia",
    descricao ="Encontre notebooks, smartphones, tablets e acessórios com preços especiais.",
    textoBotao ="Ver ofertas",
    src = "/src/assets/banner-promocional.png",
    alt = "Banner Promocional TADS Store"
}) {
    return (
        <section className="banner-promocional">

            <div className="banner-conteudo">

                <h2 className="banner-titulo">
                    {titulo}
                </h2>

                <p className="banner-descricao">
                    {descricao}
                </p>

            </div>

            <div className="banner-imagem-container">

                <img
                    src={src}
                    alt={alt}
                    className="banner-imagem"

                />

            </div>

        </section>
    );
}

export default BannerPromocional;