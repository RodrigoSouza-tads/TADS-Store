function CategoriaMenu({
    categorias = [],
    categoriaSelecionada,
    onSelecionarCategoria
}) {
    return (
        <nav className="categoria-menu">
            <button
                type="button"
                onClick={() =>
                    onSelecionarCategoria("")
                }
            >
                Todos
            </button>

            {categorias.map((categoria) => (
                <button
                    key={categoria}
                    type="button"
                    className={
                        categoriaSelecionada === categoria
                            ? "ativo"
                            : ""
                    }
                    onClick={() =>
                        onSelecionarCategoria(
                            categoria
                        )
                    }
                >
                    {categoria}
                </button>
            ))}
        </nav>
    );
}

export default CategoriaMenu;