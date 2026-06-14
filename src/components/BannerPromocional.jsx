import Botao from "./BotaoComprar";

function BannerPromocional({
    titulo = "Tecnologia para seu dia a dia",
    descricao ="Encontre notebooks, smartphones, tablets e acessórios com preços especiais.",
    textoBotao ="Ver ofertas",
    onCliqueBotao,
    src = "/src/assets/banner-promocional.png",
    alt = "Banner Promocional TADS Store"
}) {
    return (
        <section className="banner-promocional">

            <div className="banner-conteudo">

                <h2>{titulo}</h2>

                <img
                    src={src}
                    alt={alt}
                    className="banner-imagem"
                />

                <p>{descricao}</p>

                {textoBotao && (
                    <Botao
                        texto={textoBotao}
                        onClick={onCliqueBotao}
                    />
                )}

            </div>



        </section>
    );
}

export default BannerPromocional;