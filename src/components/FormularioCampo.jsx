function FormularioCampo({
    id,
    tipo = "text",
    rotulo,
    valor,
    placeholder,
    onChange
}) {
    return (
        <div className="campo-formulario">
            <label htmlFor={id}>
                {rotulo}
            </label>

            <input
                id={id}
                name={id}
                type={tipo}
                value={valor}
                placeholder={placeholder}
                onChange={(evento) =>
                    onChange(evento.target.value)
                }
            />
        </div>
    );
}

export default FormularioCampo;