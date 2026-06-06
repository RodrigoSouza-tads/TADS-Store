function Logo({
    src = "/logo-tads-store.png",
    alt = "TADS Store",
    altura = 48,
    mostrarTexto = true,
    titulo = "TADS",
    subtitulo = "STORE"
}) {
    return (
        <div className="logo">

            <img
                src={src}
                alt={alt}
                className="logo-imagem"
                style={{
                    height: `${altura}px`
                }}
            />

            {mostrarTexto && (
                <span className="logo-marca">
                    <div className="logo-texto">

                        <span className="logo-titulo">
                            {titulo}
                        </span>

                        <span className="logo-subtitulo">
                            {subtitulo}
                        </span>

                    </div>
                </span>
            )}

        </div>
    );
}

export default Logo;