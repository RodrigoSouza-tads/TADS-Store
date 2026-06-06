function IconeFavorito({
    tamanho = 24,
    preenchido = false,
    cor = "currentColor"
}) {
    return (
        <svg
            width={tamanho}
            height={tamanho}
            viewBox="0 0 24 24"
            fill={
                preenchido
                    ? "var(--color-danger)"
                    : "none"
            }
            stroke={cor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
    );
}

export default IconeFavorito;