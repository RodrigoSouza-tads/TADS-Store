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
import { Link } from "react-router-dom";




function Cabecalho({
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

                    {/* auth */}
                    <div className="cabecalho-acoes">

                        


                        {/* DESKTOP */}
                        <div className="cabecalho-menu-desktop">

                                {
                                    autenticado && (
                                        <span className="cabecalho-mensagem">
                                            {usuario.nome}
                                        </span>
                                    )
                                }

  


                            <BotaoFavoritoMenu />

                            <BotaoCarrinho
                                quantidadeItens={quantidadeCarrinho}
                            />

                            <BotaoUsuario/>

                            <BotaoTema
                                tema={tema}
                                alternarTema={alternarTema}
                            />

                            {autenticado ? (

                                <button
                                    className="botao-login-cabecalho"
                                    onClick={logout}
                                >
                                    Sair
                                </button>

                            ) : (

                                <Link
                                    to="/login"
                                    className="botao-login-cabecalho"
                                >
                                    Entrar
                                </Link>

                            )}


                        </div>


                        {/* MOBILE */}
                        <div className="cabecalho-menu-mobile">


                            <BotaoToggle
                                aberto={menuAberto}
                                onToggle={() =>
                                    setMenuAberto(
                                        !menuAberto
                                    )
                                }
                            />


                            <MenuToggle
                                aberto={menuAberto}
                            >

                                {
                                    autenticado && (
                                        <span className="cabecalho-mensagem">
                                            {usuario.nome}
                                        </span>
                                    )
                                }

                                <BotaoFavoritoMenu />

                                <BotaoCarrinho
                                    quantidadeItens={
                                        quantidadeCarrinho
                                    }
                                />

                                <BotaoUsuario/>

                                <BotaoTema
                                    tema={tema}
                                    alternarTema={alternarTema}
                                />

                                {
                                    autenticado ? (

                                        <button
                                            className="botao-login-cabecalho"
                                            onClick={logout}
                                        >
                                            Sair
                                        </button>

                                    ) : (

                                        <Link
                                            to="/login"
                                            className="botao-login-cabecalho"
                                        >
                                            Entrar
                                        </Link>

                                    )
                                }


                            </MenuToggle>

                        </div>


                    </div>

                </div>

            </div>

        </header>
    );
}

export default Cabecalho;