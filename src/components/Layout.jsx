import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import Toast from "./Toast";
import { useToast } from "../contexts/ToastContext";

function Layout({ 
    children ,
    busca,
    onBuscar
 }) {

    const { mensagem, visivel } = useToast();

    return (
        <div className="app">
            <Cabecalho
                busca={busca}
                onBuscar={onBuscar}
            />
            <main>{children}</main>

            <Toast mensagem={mensagem} visivel={visivel} />

            <Rodape />
        </div>
    );
}

export default Layout;
