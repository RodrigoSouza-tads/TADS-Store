function IconeTema({
    tema = "light",
    tamanho = 24
}) {
    if (tema === "dark") {
        return (
            <svg
                width={tamanho}
                height={tamanho}
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
            >
                <circle
                    cx="12"
                    cy="12"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="2"
                />

                <path
                    d="M12 4
                       A8 8 0 0 1
                       12 20
                       Z"
                    fill="currentColor"
                />
            </svg>
        );
    }

    return (
        <svg
            width={tamanho}
            height={tamanho}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <circle
                cx="12"
                cy="12"
                r="8"
                fill="currentColor"
            />

            <circle
                cx="12"
                cy="12"
                r="5"
                fill="var(--color-surface)"
            />
        </svg>
    );
}

export default IconeTema;