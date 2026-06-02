function ProdutosFiltro({
    valor,
    opcoes,
    onChange,
    rotulo = "Filtrar por"
}) {
    return (
        <div className="filtro-produtos">
            <label>
                {rotulo}

                <select
                    value={valor}
                    onChange={(evento) => onChange(evento.target.value)}
                >
                    {opcoes.map(({ valor, texto }) => (
                        <option
                            key={valor}
                            value={valor}
                        >
                            {texto}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
}

export default ProdutosFiltro;