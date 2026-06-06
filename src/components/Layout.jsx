import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

function Layout({ children }) {
    return (
        <div className="app">
        <Cabecalho/>
        <main>{children}</main>
        <Rodape />
        </div>
    );
}

export default Layout;
