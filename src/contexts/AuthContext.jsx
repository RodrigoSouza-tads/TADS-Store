import {
createContext,
useContext,
useEffect,
useState
} from "react";

const AuthContext =
createContext();

export function AuthProvider({
    children
}) {


    const [usuario,
        setUsuario] =
        useState(null);

    const [carregando,
        setCarregando] =
        useState(true);

    useEffect(() => {

        const usuarioSalvo =
            localStorage.getItem(
                "tadsstore_usuario"
            );

        if (usuarioSalvo) {

            setUsuario(
                JSON.parse(
                    usuarioSalvo
                )
            );

        }

        setCarregando(false);

    }, []);

    function login(
        dadosUsuario
    ) {

        if (!dadosUsuario?.email) {
            return;
        }
        
        setUsuario(
            dadosUsuario
        );

        localStorage.setItem(
            "tadsstore_usuario",
            JSON.stringify(
                dadosUsuario
            )
        );
    }

    function cadastrar(
        dadosUsuario
    ) {

        localStorage.setItem(
            "tadsstore_usuario",
            JSON.stringify(
                dadosUsuario
            )
        );

        setUsuario(
            dadosUsuario
        );
    }

    function logout() {

        localStorage.removeItem(
            "tadsstore_usuario"
        );

        setUsuario(null);
    }

    function atualizarUsuario(
        novosDados
    ) {

        const usuarioAtualizado = {
            ...usuario,
            ...novosDados
        };

        setUsuario(
            usuarioAtualizado
        );

        localStorage.setItem(
            "tadsstore_usuario",
            JSON.stringify(
                usuarioAtualizado
            )
        );
    }

    return (

        <AuthContext.Provider
            value={{
                usuario,
                carregando,
                autenticado:
                    Boolean(
                        usuario
                    ),
                login,
                cadastrar,
                logout,
                atualizarUsuario
            }}
        >

            {children}

        </AuthContext.Provider>

    );


    }

    export function useAuth() {


    return useContext(
        AuthContext
    );


}
