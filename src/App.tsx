import PGHome from "./pages/Home/Home";
import { PGLogin } from "./pages/Login/Login";
import {BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PGLogin />} />
        <Route path="/home" element={<PGHome />} />
      </Routes>
    </BrowserRouter>
  );
};
