import Botao from "./Botao";

function BannerPromocional({
    titulo,
    descricao,
    textoBotao,
    onCliqueBotao,
    imagem
}) {
    return (
        <section className="banner-promocional">

            <div className="banner-conteudo">

                <h2>{titulo}</h2>

                <p>{descricao}</p>

                {textoBotao && (
                    <Botao
                        texto={textoBotao}
                        onClick={onCliqueBotao}
                    />
                )}

            </div>

            {imagem && (
                <div className="banner-imagem">
                    <img
                        src={imagem}
                        alt={titulo}
                    />
                </div>
            )}

        </section>
    );
}

export default BannerPromocional;