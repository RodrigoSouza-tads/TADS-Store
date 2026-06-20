import { useCarrinho } from "../contexts/CarrinhoContext";

function SeletorQuantidade({ quantidade, onIncrementar, onDecrementar }) {
  return (
    <div className="seletor-quantidade">
      <button
        type="button"
        onClick={onDecrementar}
        disabled={quantidade <= 1}
        aria-label="Diminuir quantidade"
      >
        -
      </button>

      <span>{quantidade}</span>

      <button
        type="button"
        onClick={onIncrementar}
        aria-label="Aumentar quantidade"
      >
        +
      </button>
    </div>
  );
}

export default SeletorQuantidade;