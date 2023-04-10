import React from "react";
import Medico from "../../Medico";

export default function Horarios() {
  return (
    <section className="pt-24">
      <h2 className="uppercase text-4xl text-gray-700 font-light py-6 leading-snug">
        Horários de <span className="font-semibold">atendimento</span>
      </h2>
      <p>Agende uma consulta pelo telefone: (21) 3699 - 9999</p>
      <div className="flex flex-wrap py-8 items-center justify-center gap-4">
        <Medico
          img="/assets/medico01.png"
          nome="Dr. Hélio"
          horario="Segundas, quartas e sextas das 09:00 às 16:00"
        />
        <Medico
          img="/assets/medico02.png"
          nome="Dr. Carlos"
          horario="Terças e quintas das 13:00 às 18:00"
        />
        <Medico
          img="/assets/medico03.png"
          nome="Dra. Suzana"
          horario="Terças, quintas e sábados das 08:00 às 12:00"
        />
      </div>
    </section>
  );
}
