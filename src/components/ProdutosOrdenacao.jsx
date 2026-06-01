function ProdutosOrdenacao({
    valor,
    opcoes,
    onChange
}) {
    return (
        <div className="ordenacao-produtos">
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
        </div>
    );
}

export default ProdutosOrdenacao;