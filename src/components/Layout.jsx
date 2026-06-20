import { useState } from "react";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import Toast from "./Toast";
import { useToast } from "../contexts/ToastContext";

function Layout({ children }) {

    const [busca, setBusca] = useState("");
    const { mensagem, visivel } = useToast();

    return (
        <div className="app">
            <Cabecalho
                busca={busca}
                onBuscar={setBusca}
            />
            <main>{children}</main>

            <Toast mensagem={mensagem} visivel={visivel} />

            <Rodape />
        </div>
    );
}

export default Layout;
