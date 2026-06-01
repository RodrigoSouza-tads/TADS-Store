function Breadcrumb({ itens }) {
    return (
        <nav className="breadcrumb" aria-label="Breadcrumb">
            {itens.map((item, indice) => (
                <span key={item.texto}>
                    {item.url ? (
                        <a href={item.url}>
                            {item.texto}
                        </a>
                    ) : (
                        <span>{item.texto}</span>
                    )}

                    {indice < itens.length - 1 && (
                        <span> &gt; </span>
                    )}
                </span>
            ))}
        </nav>
    );
}

export default Breadcrumb;