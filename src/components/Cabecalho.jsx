import { useTema } from "../contexts/TemaContext";
import Logo from "./Logo";
import BarraBusca from "./BarraBusca";
import BotaoTema from "./BotaoTema";
import BotaoFavoritoMenu from "./BotaoFavoritoMenu";
import BotaoUsuario from "./BotaoUsuario";
import BotaoCarrinho from "./BotaoCarrinho";
import MenuNavegacao from "./MenuNavegacao";




function Cabecalho({
    titulo,
    busca,
    onBuscar,
    itensMenu = [],
    quantidadeCarrinho = 0
}) {

    const {tema, alternarTema} = useTema();

    return (
        <header className="cabecalho">

            <div className="cabecalho-container">

                <div className="cabecalho-topo">

                    <Logo altura={56} />

                    <div className="cabecalho-busca">
                        <BarraBusca
                            valor={busca}
                            onChange={onBuscar}
                        />
                    </div>

                    <div className="cabecalho-acoes">

                        <BotaoFavoritoMenu />

                        <BotaoCarrinho
                            quantidadeItens={quantidadeCarrinho}
                        />

                        <BotaoUsuario/>

                        <BotaoTema     
                            tema={tema}
                            alternarTema={alternarTema}
                        />

                    </div>

                </div>

                <nav
                    className="cabecalho-navegacao"
                    aria-label="Categorias"
                >
                    <MenuNavegacao
                        itens={itensMenu}
                    />
                </nav>

            </div>

        </header>
    );
}

export default Cabecalho;