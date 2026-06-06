function BarraBusca({
    valor,
    onChange,
    placeholder = "Buscar produtos..."
}) {
    return (
        <div className="barra-busca">
            <svg
                className="icone-barra-busca"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <circle
                    cx="11"
                    cy="11"
                    r="7"
                />

                <line
                    x1="16.65"
                    y1="16.65"
                    x2="21"
                    y2="21"
                />
            </svg>

            <input
                type="search"
                id="busca"
                name="busca"
                className="barra-busca-input"
                placeholder={placeholder}
                value={valor}
                onChange={(evento) =>
                    onChange(evento.target.value)
                }
                autoComplete="off"
            />
        </div>
    );
}

export default BarraBusca;