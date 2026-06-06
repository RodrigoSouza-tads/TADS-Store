import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

const TemaContext = createContext();

export function TemaProvider({
    children
}) {
    const [tema, setTema] = useState("light");

    function alternarTema() {
        setTema((temaAtual) =>
            temaAtual === "light"
                ? "dark"
                : "light"
        );
    }

    useEffect(() => {
        document.body.classList.remove(
            "light-theme",
            "dark-theme"
        );

        document.body.classList.add(
            `${tema}-theme`
        );
    }, [tema]);

    return (
        <TemaContext.Provider
            value={{
                tema,
                alternarTema
            }}
        >
            {children}
        </TemaContext.Provider>
    );
}

export function useTema() {
    return useContext(TemaContext);
}