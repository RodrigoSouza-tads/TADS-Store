function AvaliacaoEstrelas({ nota = 0 }) {
    const estrelas = Math.round(nota);

    return (
        <div className="avaliacao-estrelas">
            {Array.from({ length: 5 }, (_, indice) => (
                <span key={indice}>
                    {indice < estrelas ? "★" : "☆"}
                </span>
            ))}
        </div>
    );
}

export default AvaliacaoEstrelas;