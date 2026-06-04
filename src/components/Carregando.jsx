function Carregando({ mensagem = "Carregando..." }) {
    return (
        <div className="loading">
            <p>{mensagem}</p>
        </div>
    );
}

export default Carregando;