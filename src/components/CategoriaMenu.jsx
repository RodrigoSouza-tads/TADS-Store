function CategoriaMenu({
    categorias,
    categoriaSelecionada,
    onSelecionarCategoria
}) {
    return (
        <nav className="categoria-menu">
            {categorias.map((categoria) => (
                <button
                    key={categoria}
                    type="button"
                    className={
                        categoria === categoriaSelecionada
                            ? "categoria-ativa"
                            : ""
                    }
                    onClick={() => onSelecionarCategoria(categoria)}
                >
                    {categoria}
                </button>
            ))}
        </nav>
    );
}

export default CategoriaMenu;