import IconeTema from "./IconeTema";

function BotaoTema({
    tema,
    alternarTema
}) {
    return (
        <button
            type="button"
            className="botao-menu botao-tema"
            aria-label={
                tema === "light"
                    ? "Ativar tema escuro"
                    : "Ativar tema claro"
            }
            onClick={alternarTema}
        >
            <IconeTema tema={tema} />
        </button>
    );
}

export default BotaoTema;