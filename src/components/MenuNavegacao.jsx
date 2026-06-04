function MenuNavegacao({
    itens = []
}) {
    return (
        <ul className="menu-navegacao">

            {itens.map((item) => (
                <li key={item}>
                    <button
                        type="button"
                        className="menu-item"
                    >
                        {item}
                    </button>
                </li>
            ))}

        </ul>
    );
}

export default MenuNavegacao;