import MainLayout from "./components/layout/MainLayout";
import { Login } from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Usuarios } from "./pages/Usuarios/Usuarios";
import { Atendimentos } from "./pages/Atendimentos/Atendimentos";
import { Solicitacoes } from "./pages/Solicitacoes/Solicitacoes";
import { Inventario } from "./pages/Inventario/Inventario";
import { Home } from "./pages/Home/Home";
import { Treinamentos } from "./pages/Treinamentos/Treinamentos";
import { CanalOuvidoria } from "./pages/CanalOuvidoria/CanalOuvidoria";
import { ComunicadoGeral } from "./pages/ComunicadoGeral/ComunicadoGeral";
import { ManualCultura } from "./pages/ManualCultura/ManualCultura";
import { Politicas } from "./pages/Politicas/Politicas";
import { Organograma } from "./pages/Organograma/Organograma";
import { Borracharia } from "./pages/Conhecimentos/pages/Borracharia/Borracharia";
import { Comercial } from "./pages/Conhecimentos/pages/Comercial/Comercial";
import { Compras } from "./pages/Conhecimentos/pages/Compras/Compras";
import { Consultoria } from "./pages/Conhecimentos/pages/Consultoria/Consultoria";
import { Diretoria } from "./pages/Conhecimentos/pages/Diretoria/Diretoria";
import { Ecommerce } from "./pages/Conhecimentos/pages/Ecommerce/Ecommerce";
import { Estoque } from "./pages/Conhecimentos/pages/Estoque/Estoque";
import { Financeiro } from "./pages/Conhecimentos/pages/Financeiro/Financeiro";
import { Roteirizacao } from "./pages/Conhecimentos/pages/Roteirizacao/Roteirizacao";
import { Tecnologia } from "./pages/Conhecimentos/pages/Tecnologia/Tecnologia";
import { ConhecimentosGerais } from "./pages/Conhecimentos/pages/ConhecimentosGerais/ConhecimentosGerais";


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />                                          {/*✅*/}

        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />                                     {/*✅*/}
          <Route path="/atendimentos" element={<Atendimentos />} />                     {/*✅*/}
          <Route path="/solicitacoes" element={<Solicitacoes />} />                     {/*✅*/}
          <Route path="/inventario" element={<Inventario />} />                         {/*✅*/}
          <Route path="/colaboradores" element={<Usuarios />} />                        {/*✅*/}
          <Route path="/comunicadogeral" element={<ComunicadoGeral />} />               {/*✅*/}
          <Route path="/treinamentos" element={<Treinamentos />} />                     {/*✅*/}
          <Route path="/canalouvidoria" element={<CanalOuvidoria />} />                 {/*✅*/}
          <Route path="/manualcultura" element={<ManualCultura />} />                   {/*✅*/}
          <Route path="/organograma" element={<Organograma />} />                       {/*✅*/}
          <Route path="/politicas" element={<Politicas />} />                           {/*✅*/}

          {/* Pages de base de conhecimentos */}

          <Route path="/conhecimentos/conhecimentosgerais" element={<ConhecimentosGerais />} />         {/*❌*/}
          <Route path="/conhecimentos/borracharia" element={<Borracharia />} />         {/*❌*/}
          <Route path="/conhecimentos/comercial" element={<Comercial />} />             {/*❌*/}
          <Route path="/conhecimentos/compras" element={<Compras />} />                 {/*❌*/}
          <Route path="/conhecimentos/consultoria" element={<Consultoria />} />         {/*❌*/}
          <Route path="/conhecimentos/diretoria" element={<Diretoria />} />             {/*❌*/}
          <Route path="/conhecimentos/ecommerce" element={<Ecommerce />} />             {/*❌*/}
          <Route path="/conhecimentos/estoque" element={<Estoque />} />                 {/*❌*/}
          <Route path="/conhecimentos/financeiro" element={<Financeiro />} />           {/*❌*/}
          <Route path="/conhecimentos/roteirizacao" element={<Roteirizacao />} />       {/*❌*/}
          <Route path="/conhecimentos/tecnologia" element={<Tecnologia />} />           {/*❌*/}
        </Route>

      </Routes>
    </BrowserRouter>
  );
};
