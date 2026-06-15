import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { TemaProvider } from "./contexts/TemaContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ResultadosBusca from "./pages/ResultadosBusca";
import Detalhe from "./pages/Detalhe"
import NaoEncontrado from "./pages/NaoEncontrado"
import "./App.css";



function App() {
  const [busca, setBusca] = useState("");
  

  return (

    <TemaProvider>
      <Layout> {/* cabeçalho e rodapé em todas as telas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<Detalhe />} />
          <Route path="/resultadosbusca" element={<ResultadosBusca busca={busca}/>} />
          <Route path="*" element={<NaoEncontrado />} />
        </Routes>
      </Layout>

    </TemaProvider>
  );
}

export default App;

