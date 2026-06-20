import {
createContext,
useContext,
useState
} from "react";

const ToastContext = createContext();

export function ToastProvider({
children
}) {

const [mensagem, setMensagem] =
    useState("");

const [visivel, setVisivel] =
    useState(false);

function mostrarToast(texto) {

    setMensagem(texto);
    setVisivel(true);

    setTimeout(() => {
        setVisivel(false);
    }, 3000);
}

return (
    <ToastContext.Provider
        value={{
            mostrarToast,
            mensagem,
            visivel
        }}
    >
        {children}
    </ToastContext.Provider>
);

}

export function useToast() {
return useContext(ToastContext);
}