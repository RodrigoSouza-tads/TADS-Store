import IconeUsuario from "./IconeUsuario";

function BotaoUsuario({
    onClick
}) {
    return (
        <button
            type="button"
            className="botao-menu botao-usuario"
            aria-label="Minha conta"
            onClick={onClick}
        >
            <IconeUsuario />
        </button>
    );
}

export default BotaoUsuario;