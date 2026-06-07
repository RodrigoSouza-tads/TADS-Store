function Selo({
    texto,
    cor = "verde"
}) {
    return (
        <span
            className="selo"
        >
            {texto}
        </span>
    );
}

export default Selo;