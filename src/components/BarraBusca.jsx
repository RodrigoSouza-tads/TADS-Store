import IconeBarraBusca from "./IconeBarraBusca";
import { useNavigate } from "react-router-dom";

function BarraBusca({
    valor,
    onChange,
    placeholder = "Buscar produtos..."
}) {

    const navigate = useNavigate();

    function handleSubmit(evento) {
        evento.preventDefault();

        if (valor.trim() === "") {
            return;
        }

        navigate("/resultadosbusca");
    }


    return (
        <form 
            onSubmit={handleSubmit}
            className="barra-busca"
        >

            <IconeBarraBusca />

            <input
                type="search"
                id="busca"
                name="busca"
                className="barra-busca-input"
                placeholder={placeholder}
                value={valor}
                onChange={(evento) =>
                    onChange(evento.target.value)
                }
                autoComplete="off"
                
            />

        </form>
    );
}

export default BarraBusca;