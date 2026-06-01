function ProdutoGaleria({
    imagemPrincipal,
    nomeProduto
}) {
    return (
        <div className="produto-galeria">
            <img
                src={imagemPrincipal}
                alt={nomeProduto}
            />
        </div>
    );
}

export default ProdutoGaleria;