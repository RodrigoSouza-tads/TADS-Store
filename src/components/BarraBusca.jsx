function BarraBusca({
    valor,
    placeholder = "Pesquisar produtos...",
    onChange
}) {
    return (
        <div className="barra-busca">
            <input
                type="text"
                value={valor}
                placeholder={placeholder}
                onChange={(evento) => onChange(evento.target.value)}
            />
        </div>
    );
}

export default BarraBusca;