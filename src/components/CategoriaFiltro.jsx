function CategoriaFiltro({
    categoriaSelecionada,
    nomesCategorias = {},
    onChange
}) {

    return (
        <div className="categoria-filtro">

            <label htmlFor="filtro-categoria">
                Filtrar por:
            </label>

            <select
                id="filtro-categoria"
                value={categoriaSelecionada}
                onChange={(evento) =>
                    onChange(
                        evento.target.value
                    )
                }
            >

                <option value="">
                    Todas as categorias
                </option>

                {Object.entries(
                    nomesCategorias
                ).map(
                    ([chave, nome]) => (

                        <option
                            key={chave}
                            value={chave}
                        >
                            {nome}
                        </option>

                    )
                )}

            </select>

            <p>
                Categoria ativa:
                {" "}
                {categoriaSelecionada
                    ? nomesCategorias[
                        categoriaSelecionada
                    ]
                    : "Nenhuma (Todas)"
                }
            </p>

        </div>
    );
}

export default CategoriaFiltro;