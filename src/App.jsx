import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { TemaProvider } from "./contexts/TemaContext";
import { CarrinhoProvider } from "./contexts/CarrinhoContext";
import { ToastProvider } from "./contexts/ToastContext";
import { FavoritosProvider } from "./contexts/FavoritosContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ResultadosBusca from "./pages/ResultadosBusca";
import Detalhe from "./pages/Detalhe"
import Carrinho from "./pages/Carrinho"
import Checkout from "./pages/Checkout";
import ConfirmacaoPedido from "./pages/ConfirmacaoPedido";
import MinhaConta from "./pages/MinhaConta";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Favoritos from "./pages/Favoritos";
import NaoEncontrado from "./pages/NaoEncontrado"
import RotaPrivada from "./components/RotaPrivada";
import "./App.css";



function App() {
  const [busca, setBusca] = useState("");
  

  return (

    <TemaProvider> {/* mudança de tema em todas as telas */}

      <FavoritosProvider>

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
                <Route path="/favoritos" element={<Favoritos />}/>
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/pedido-confirmado" element={<ConfirmacaoPedido />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/minha-conta" element={<RotaPrivada><MinhaConta /></RotaPrivada> } />
                <Route path="*" element={<NaoEncontrado />} />
              </Routes>

            </Layout>

          </ToastProvider>

        </CarrinhoProvider>

      </FavoritosProvider>


    </TemaProvider>
  );
}

export default App;

