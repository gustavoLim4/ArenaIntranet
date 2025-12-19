import MainLayout from "./components/layout/MainLayout";
import { Login } from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Usuarios } from "./pages/Usuarios/Usuarios";
import { Atendimentos } from "./pages/Atendimentos/Atendimentos";
import { Solicitacoes } from "./pages/Solicitacoes/Solicitacoes";
import { Inventario } from "./pages/Inventario/Inventario";
import { Home } from "./pages/Home/Home";
import { Treinamentos } from "./pages/Treinamentos/Treinamentos";
import { Conhecimentos } from "./pages/Conhecimentos/Conhecimentos";
import { CanalOuvidoria } from "./pages/CanalOuvidoria/CanalOuvidoria";
import { ComunicadoGeral } from "./pages/ComunicadoGeral/ComunicadoGeral";
import { ManualCultura } from "./pages/ManualCultura/ManualCultura";
import { Politicas } from "./pages/Politicas/Politicas";
import { Organograma } from "./pages/Organograma/Organograma";


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />                                  {/*✅*/}

        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />                             {/*✅*/}
          <Route path="/atendimentos" element={<Atendimentos />} />             {/*✅*/}
          <Route path="/solicitacoes" element={<Solicitacoes />} />             {/*✅*/}
          <Route path="/inventario" element={<Inventario />} />                 {/*✅*/}
          <Route path="/colaboradores" element={<Usuarios />} />                {/*✅*/}
          <Route path="/comunicadogeral" element={<ComunicadoGeral />} />       {/*✅*/}
          <Route path="/treinamentos" element={<Treinamentos />} />             {/*✅*/}
          <Route path="/conhecimentos" element={<Conhecimentos />} />           {/*❌*/}
          <Route path="/canalouvidoria" element={<CanalOuvidoria />} />         {/*✅*/}
          <Route path="/manualcultura" element={<ManualCultura />} />           {/*❌*/}
          <Route path="/organograma" element={<Organograma />} />               {/*✅*/}
          <Route path="/politicas" element={<Politicas />} />                   {/*✅*/}
        </Route>

      </Routes>
    </BrowserRouter>
  );
};
