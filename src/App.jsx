import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { TemaProvider } from "./contexts/TemaContext";
import { CarrinhoProvider } from "./contexts/CarrinhoContext";
import { ToastProvider } from "./contexts/ToastContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ResultadosBusca from "./pages/ResultadosBusca";
import Detalhe from "./pages/Detalhe"
import Carrinho from "./pages/Carrinho"
import NaoEncontrado from "./pages/NaoEncontrado"
import "./App.css";



function App() {
  const [busca, setBusca] = useState("");
  

  return (

    <TemaProvider> {/* mudança de tema em todas as telas */}

      <CarrinhoProvider> {/* interação com carrinho em todas as telas */}

        <ToastProvider>

          <Layout> {/* cabeçalho e rodapé em todas as telas */}

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produto/:id" element={<Detalhe />} />
              <Route path="/resultadosbusca" element={<ResultadosBusca busca={busca}/>} />
              <Route path="/carrinho" element={<Carrinho />}/>
              <Route path="*" element={<NaoEncontrado />} />
            </Routes>

          </Layout>

        </ToastProvider>

      </CarrinhoProvider>

    </TemaProvider>
  );
}

export default App;

