import ProdutoCard from "./ProdutoCard";
const produtos = [
{ id: 1, nome: "Notebook", preco: 3499.9, freteGratis: true },
{ id: 2, nome: "Fone", preco: 199.9, freteGratis: false },
];
function Vitrine() {
    return (
        <section className="vitrine">
            {produtos.map((p) => (
            <ProdutoCard key={p.id} produto={p} />
            ))}
        </section>
    );
}
export default Vitrine;