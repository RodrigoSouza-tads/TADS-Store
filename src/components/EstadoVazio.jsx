function EstadoVazio({
    titulo = "Nenhum resultado encontrado",
    descricao = "Tente realizar uma nova busca."
}) {
    return (
        <section className="empty-state">
            <h2>{titulo}</h2>
            <p>{descricao}</p>
        </section>
    );
}

export default EstadoVazio;