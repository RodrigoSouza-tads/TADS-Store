import { Link } from "react-router-dom";

function Breadcrumb({ itens }) {
    return (
        <nav className="breadcrumb" aria-label="Breadcrumb">
            {itens.map((item, indice) => (
                <span 
                    className="breadcrumb-item"
                    key={`${item.texto}-${indice}`}
                >
                    {item.link ? (
                        <Link 
                            className="breadcrumb-link" 
                            to={item.link} 
                        > 
                            {item.texto} 
                        </Link>
                    ) : (
                        <span>{item.texto}</span>
                    )}

                    {indice < itens.length - 1 && (
                        <span
                            className="breadcrumb-separador"
                            aria-hidden="true"
                        > 
                            &gt; 
                        </span>
                    )}
                </span>
            ))}
        </nav>
    );
}

export default Breadcrumb;