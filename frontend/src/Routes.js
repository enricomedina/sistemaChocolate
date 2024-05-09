import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Cadastro from "./Pages/Cadastro";
import TabelaUsuarios from "./Pages/ListaUsuarios";
import Login from "./Pages/Login";

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listaUsuarios" element={<TabelaUsuarios />} />
      </Routes>
    </>
  );
};

export default Rotas;
