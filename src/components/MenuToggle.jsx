function MenuToggle({
    aberto,
    children
}) {
    if (!aberto) {
        return null;
    }

    return (
        <div
            className="menu-toggle"
            role="menu"
            aria-label="Menu de ações"
        >
            {children}
        </div>
    );
}

export default MenuToggle;