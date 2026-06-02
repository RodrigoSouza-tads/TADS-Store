function MenuNavegacao({
    itens = []
}) {
    return (
        <nav className="menu-navegacao">
            <ul>
                {itens.map(({ texto, onClique }) => (
                    <li key={texto}>
                        <button
                            type="button"
                            onClick={onClique}
                        >
                            {texto}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default MenuNavegacao;