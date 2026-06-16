import { useState, useEffect } from "react";

function GaleriaProduto({
    imagemPrincipal,
    imagens = [],
    nome
}) {

    const [imagemSelecionada,
        setImagemSelecionada] =
        useState(imagemPrincipal);

    useEffect(() => {
        setImagemSelecionada(
            imagemPrincipal
        );
    }, [imagemPrincipal]);

    return (
        <section
            className="galeria-produto"
            aria-label="Galeria de imagens do produto"
        >

            <div className="galeria-produto-principal">

                <img
                    src={imagemSelecionada}
                    alt={nome}
                    className="galeria-produto-imagem"
                />

            </div>

            {imagens.length > 1 && (

                <div
                    className="galeria-produto-miniaturas"
                >

                    {imagens.map(
                        (imagem, indice) => (

                            <button
                                key={indice}
                                type="button"
                                className={
                                    `
                                    galeria-produto-miniatura
                                    ${
                                        imagemSelecionada ===
                                        imagem
                                            ? "ativa"
                                            : ""
                                    }
                                    `
                                }
                                onClick={() =>
                                    setImagemSelecionada(
                                        imagem
                                    )
                                }
                            >

                                <img
                                    src={imagem}
                                    alt={`${nome} ${
                                        indice + 1
                                    }`}
                                />

                            </button>

                        )
                    )}

                </div>

            )}

        </section>
    );
}

export default GaleriaProduto;