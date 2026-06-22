function FormularioCampo({
    id,
    tipo = "text",
    rotulo,
    valor = "",
    placeholder = "",
    onChange,
    required = false,
    disabled = false,
    autoComplete,
    erro,
    maxLength,
    minLength,
    pattern,
    className = "",
    inputMode,
}) {


    const possuiErro = Boolean(erro);


    return (

        <div

            className={`
                campo-formulario
                ${className}
                ${possuiErro 
                    ? "campo-formulario-erro" 
                    : ""
                }
            `}
        >

            <label
                htmlFor={id}
                className="campo-formulario-rotulo"

            >
                {rotulo}

                {required && (
                    <span
                        className="campo-obrigatorio"
                        aria-hidden="true"
                    >
                        *
                    </span>
                )}

            </label>



            <input
                id={id}
                name={id}
                type={tipo}
                value={valor}
                placeholder={placeholder || ""}
                required={required}
                disabled={disabled}
                autoComplete={autoComplete}
                maxLength={maxLength}
                minLength={minLength}
                pattern={pattern}
                inputMode={inputMode}
                aria-required={required}
                aria-invalid={possuiErro}
                aria-label={rotulo}
                aria-describedby={
                    possuiErro
                        ? `${id}-erro`
                        : undefined
                }
                onChange={(evento)=>
                    onChange?.(
                        evento.target.value
                    )
                }

            />

            {possuiErro && (
                <span
                    id={`${id}-erro`}
                    className="campo-formulario-mensagem-erro"
                    role="alert"
                >
                    {erro}
                </span>
            )}

        </div>

    );

}


export default FormularioCampo;