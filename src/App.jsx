import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { TemaProvider } from "./contexts/TemaContext";
import { CarrinhoProvider } from "./contexts/CarrinhoContext";
import { ToastProvider } from "./contexts/ToastContext";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ResultadosBusca from "./pages/ResultadosBusca";
import Detalhe from "./pages/Detalhe"
import Carrinho from "./pages/Carrinho"
import Checkout from "./pages/Checkout";
import ConfirmacaoPedido from "./pages/ConfirmacaoPedido";
import Usuario from "./pages/Usuario";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import NaoEncontrado from "./pages/NaoEncontrado"
import "./App.css";



function App() {
  const [busca, setBusca] = useState("");
  

  return (

    <TemaProvider> {/* mudança de tema em todas as telas */}

      <AuthProvider>

        <CarrinhoProvider> {/* interação com carrinho em todas as telas */}

          <ToastProvider>

            <Layout 
              busca={busca}
              onBuscar={setBusca}
            >  {/* cabeçalho e rodapé em todas as telas */}

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produto/:id" element={<Detalhe />} />
                <Route path="/resultadosbusca" element={<ResultadosBusca busca={busca}/>} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/pedido-confirmado" element={<ConfirmacaoPedido />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/usuario" element={<Usuario />} />
                <Route path="*" element={<NaoEncontrado />} />
              </Routes>

            </Layout>

          </ToastProvider>

        </CarrinhoProvider>

      </AuthProvider>

    </TemaProvider>
  );
}

export default App;

