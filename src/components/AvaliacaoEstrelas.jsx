function AvaliacaoEstrelas({ nota = 0 }) {

    const estrelasPreenchidas =
        Math.round(nota);

    return (
        <div className="avaliacao-estrelas">

            {Array.from(
                { length: 5 },
                (_, indice) => (
                    <span key={indice}>
                        {
                            indice < estrelasPreenchidas
                                ? "★"
                                : "☆"
                        }
                    </span>
                )
            )}

            <span className="nota">
                {" "}
                ({nota.toFixed(1)})
            </span>

        </div>
    );
}

export default AvaliacaoEstrelas;