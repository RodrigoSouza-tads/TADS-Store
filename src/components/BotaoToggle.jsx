function BotaoToggle({
    aberto,
    onToggle
}) {
    return (
        <button
            type="button"
            className="botao-menu-toggle"
            onClick={onToggle}
            aria-expanded={aberto}
            aria-label="Abrir menu"
        >
            {aberto ? "✕" : "☰"}
        </button>
    );
}

export default BotaoToggle;