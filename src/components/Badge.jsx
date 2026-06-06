function Badge({
    valor
}) {
    if (!valor) {
        return null;
    }

    return (
        <span className="badge">
            {valor}
        </span>
    );
}

export default Badge;