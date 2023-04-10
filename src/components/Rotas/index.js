import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Contato from "../Contato";

export default function Rotas() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}
