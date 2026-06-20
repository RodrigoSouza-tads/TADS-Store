function Modal({
    titulo,
    aberto,
    children,
    onFechar
}) {
    if (!aberto) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <section className="modal">
                <header className="modal-cabecalho">
                    <h2>{titulo}</h2>

                    <button
                        type="button"
                        onClick={onFechar}
                        aria-label="Fechar modal"
                    >
                        x
                    </button>
                </header>

                <div className="modal-conteudo">
                    {children}
                </div>
            </section>
        </div>
    );
}

export default Modal;