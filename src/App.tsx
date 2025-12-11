import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home/Home";
import { PGLogin } from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Usuarios from "./pages/Usuarios/Usuarios";
import {Atendimentos} from "./pages/Atendimentos/Atendimentos";
import {Solicitacoes} from "./pages/Solicitacoes/Solicitacoes";
import { Inventario } from "./pages/Inventario/Inventario";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<PGLogin />} />

        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/atendimentos" element={<Atendimentos />} />
          <Route path="/solocitacoes" element={<Solicitacoes />} />
          <Route path="/inventario" element={<Inventario />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};
