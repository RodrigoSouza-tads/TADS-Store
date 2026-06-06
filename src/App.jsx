import { useState } from "react";

import { TemaProvider } from "./contexts/TemaContext";

import Cabecalho from "./components/Cabecalho";
import Home from "./pages/Home";

import "./App.css";

function App() {

  const [busca, setBusca] = useState("");

  return (
    <TemaProvider>

      <Cabecalho
        busca={busca}
        onBuscar={setBusca}
      />

      <Home
        busca={busca}
      />

    </TemaProvider>
  );
}

export default App;

