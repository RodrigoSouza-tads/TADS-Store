import { useState } from "react";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

function Layout({ children }) {

    const [busca, setBusca] = useState("");

    return (
        <div className="app">
            <Cabecalho
                busca={busca}
                onBuscar={setBusca}
            />
            <main>{children}</main>
            <Rodape />
        </div>
    );
}

export default Layout;
