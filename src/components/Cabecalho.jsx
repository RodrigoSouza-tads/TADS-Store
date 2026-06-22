import { useTema } from "../contexts/TemaContext";
import { useAuth} from "../contexts/AuthContext"
import { useState } from "react";
import Logo from "./Logo";
import BarraBusca from "./BarraBusca";
import BotaoTema from "./BotaoTema";
import BotaoFavoritoMenu from "./BotaoFavoritoMenu";
import BotaoUsuario from "./BotaoUsuario";
import BotaoCarrinho from "./BotaoCarrinho";
import BotaoToggle from "./BotaoToggle";
import MenuToggle from "./MenuToggle";
import MenuNavegacao from "./MenuNavegacao";
import { Link } from "react-router-dom";




function Cabecalho({
    titulo,
    busca,
    onBuscar,
    itensMenu = [],
    quantidadeCarrinho = 0
}) {

    const { tema, alternarTema} = useTema();
    const { usuario, autenticado, logout} = useAuth();
    const [ menuAberto, setMenuAberto] = useState(false);

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

                        <div className="cabecalho-menu-mobile">
                            <BotaoToggle
                                aberto={menuAberto}
                                onToggle={() =>
                                    setMenuAberto(!menuAberto)
                                }
                            />
                            <MenuToggle
                                aberto={menuAberto}
                            >

                                <BotaoFavoritoMenu />

                                <BotaoCarrinho
                                    quantidadeItens={
                                        quantidadeCarrinho
                                    }
                                />

                                <BotaoUsuario />

                                <BotaoTema
                                    tema={tema}
                                    alternarTema={
                                        alternarTema
                                    }
                                />

                            </MenuToggle>
                        </div>
                        <div className="cabecalho-menu-desktop">
                            
                             <BotaoFavoritoMenu />

                            <BotaoCarrinho
                                quantidadeItens={
                                    quantidadeCarrinho
                                }
                            />

                            <BotaoUsuario />

                            <BotaoTema
                                tema={tema}
                                alternarTema={
                                    alternarTema
                                }
                            />
                        </div>            


                    </div>

                </div>
                
                    {
                        autenticado && (
                            <span>
                                Olá, {usuario.nome}
                            </span>
                        )
                    }

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