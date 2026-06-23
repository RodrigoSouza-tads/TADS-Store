import {
createContext,
useContext,
useEffect,
useState
} from "react";

const FavoritosContext =
createContext();

export function FavoritosProvider({
children
}) {

const [favoritos,
    setFavoritos] =
    useState([]);

useEffect(() => {

    const favoritosSalvos =
        localStorage.getItem(
            "tadsstore_favoritos"
        );

    if (favoritosSalvos) {

        setFavoritos(
            JSON.parse(
                favoritosSalvos
            )
        );

    }

}, []);

useEffect(() => {

    localStorage.setItem(
        "tadsstore_favoritos",
        JSON.stringify(
            favoritos
        )
    );

}, [favoritos]);

function alternarFavorito(
    produto
) {

    const existe =
        favoritos.some(
            (item) =>
                item.id === produto.id
        );

    if (existe) {

        setFavoritos(
            favoritos.filter(
                (item) =>
                    item.id !== produto.id
            )
        );

        return;
    }

    setFavoritos(
        [
            ...favoritos,
            produto
        ]
    );
}

function ehFavorito(id) {

    return favoritos.some(
        (item) =>
            item.id === id
    );
}

return (

    <FavoritosContext.Provider
        value={{
            favoritos,
            alternarFavorito,
            ehFavorito
        }}
    >

        {children}

    </FavoritosContext.Provider>

);

}

export function useFavoritos() {

return useContext(
    FavoritosContext
);

}