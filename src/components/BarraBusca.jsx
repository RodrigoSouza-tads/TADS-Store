function BarraBusca({
    valor,
    onChange
}) {
    return (
        <input
            id="busca-produtos"
            name="busca"
            type="search"
            value={valor}
            placeholder="Buscar produtos..."
            onChange={(evento) =>
                onChange(evento.target.value)
            }
        />
    );
}

export default BarraBusca;