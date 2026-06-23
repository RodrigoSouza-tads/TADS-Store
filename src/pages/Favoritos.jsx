import Breadcrumb from "../components/Breadcrumb";
import ProdutosLista from "../components/ProdutosLista";
import EstadoVazio from "../components/EstadoVazio";
import BotaoVoltar from "../components/BotaoVoltar";

import {
useFavoritos
} from "../contexts/FavoritosContext";

function Favoritos() {

const {
    favoritos
} = useFavoritos();

return (

    <section className="favoritos">

        <Breadcrumb
            itens={[
                {
                    texto: "Home",
                    link: "/"
                },
                {
                    texto: "Favoritos"
                }
            ]}
        />

        <BotaoVoltar 
            to="/"
            texto="Home"
        />

        <h1 className="pagina-titulo">
            Meus Favoritos
        </h1>

        {(favoritos?.length ?? 0) === 0 ? (

            <EstadoVazio
                titulo="Nenhum favorito"
                descricao="Adicione produtos aos favoritos para encontrá-los rapidamente."
            />

        ) : (

            <ProdutosLista
                produtos={favoritos}
            />

        )}

    </section>

);

}

export default Favoritos;