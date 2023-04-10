import React from "react";
import Banner from "./Banner";
import Conteudo from "./Conteudo";
import Clientes from "./Clientes";

export default function Home() {
  return (
    <main>
      <Banner />
      <Conteudo />
      <Clientes />
    </main>
  );
}
