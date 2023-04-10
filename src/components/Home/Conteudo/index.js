import React from "react";
import Texto from "../../Texto";

export default function Conteudo() {
  return (
    <section className="flex flex-col">
      <h2 className="uppercase text-4xl text-gray-700 font-light py-6">
        Por que usar <span className="font-semibold">Aparelho?</span>
      </h2>
      <img
        className="object-contain h-full md:w-11/12 lg:w-1/2 mx-auto"
        src="/assets/aparelho.png"
        alt="Aparelho"
      />
      <div className="flex flex-wrap items-center justify-center py-4 lg:w-9/12 mx-auto">
        <Texto
          titulo="Alinhar os dentes"
          texto="Dentes desalinhados causam problemas nos dentes e podem afetar a digestão dos alimentos e a respiração."
        />
        <Texto
          titulo="Melhorar a dicção e a higiene dentária"
          texto="Muitas pessoas não conseguem nem usar fio dental devido à posição da sua dentição. Contudo, a correção possibilita o cuidado com a saúde bucal de forma bem mais ampla."
        />
        <Texto
          titulo="Corrigir espaço entre os dentes"
          texto="Uma dentição desalinhada e com espaços significativos incomodam muitas pessoas. Usar aparelho nos dentes é uma das formas mais eficientes para que esses problemas possam ser corrigidos."
        />
      </div>
    </section>
  );
}
