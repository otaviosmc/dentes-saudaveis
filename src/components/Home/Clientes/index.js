import React from "react";
import Cliente from "../../Cliente";
import { Link } from "react-router-dom";

export default function Clientes() {
  return (
    <section className="py-8">
      <h2 className="uppercase text-4xl text-gray-700 font-light py-6 leading-snug">
        Veja o que nossos <span className="font-semibold">Clientes</span> estão
        falando...
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-4 py-4">
        <Cliente
          img="/assets/cliente01.png"
          nome="Alberto"
          depoimento="Usei aparelho por 2 anos e agora posso sorrir novamente."
        />
        <Cliente
          img="/assets/cliente02.png"
          nome="Eliana"
          depoimento="Meus dentes eram espaçados e depois de 1 ano estão no lugar certo."
        />
        <Cliente
          img="/assets/cliente03.png"
          nome="Carla"
          depoimento="Comecei a usar ano passado e já estou notando a diferença."
        />
      </div>
      <Link
        to="/contato"
        className="bg-blue-900 text-white uppercase py-2 px-4 rounded-sm font-semibold"
      >
        Entrar em Contato
      </Link>
    </section>
  );
}
