function IconeEstrela({
    tamanho = 18,
    indice,
    preenchida = false
}){
    return (
        <svg
            key={indice}
            className={
                preenchida
                    ? "estrela preenchida"
                    : "estrela"
            }
            width={tamanho}
            height={tamanho}
            viewBox="0 0 24 24"
            aria-hidden="true"
            stroke="currentColor"
            fill="currentColor"
        >
            <path
                d="
                    M12 2
                    L15.09 8.26
                    L22 9.27
                    L17 14.14
                    L18.18 21.02
                    L12 17.77
                    L5.82 21.02
                    L7 14.14
                    L2 9.27
                    L8.91 8.26
                    Z
                "
            />
        </svg>

    );


}

export default IconeEstrela;