import IconeEstrela from "./IconeEstrela";

function AvaliacaoEstrelas({
    nota = 0
}) {

    const estrelasPreenchidas =
        Math.round(nota);

    return (
        <div className="avaliacao-estrelas">

                {Array.from(
                { length: 5 },
                (_, indice) => {

                    const preenchida =
                        indice < estrelasPreenchidas;

                    return (
                        <IconeEstrela 
                        key={indice}
                        indice={indice}
                        preenchida={preenchida}
                        />
                    );
                }
            )}


            <span className="nota">
                ({nota.toFixed(1)})
            </span>

        </div>
    );
}

export default AvaliacaoEstrelas;