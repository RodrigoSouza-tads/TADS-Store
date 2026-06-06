function IconeBotao({
    children,
    ariaLabel,
    onClick
}) {
    return (
        <button
            type="button"
            className="botao-menu"
            aria-label={ariaLabel}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default IconeBotao;