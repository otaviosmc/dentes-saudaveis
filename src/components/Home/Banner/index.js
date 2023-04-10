import React from "react";

export default function Banner() {
  return (
    <div className="bg-blue-900 px-6 py-24 flex flex-col gap-6 md:px-5 text-center">
      <h1 className="uppercase text-4xl text-yellow-500 leading-snug ">
        Os melhores <span className="font-semibold ">Aparelhos dentários!</span>
      </h1>
      <p className="text-white text-xl">
        Confira abaixo todas as especialidades odontológicas que temos à sua
        disposição!
      </p>
      <div className="flex text-white font-semibold flex-wrap justify-between md:justify-center md:gap-8 md:px-12 mx-auto">
        <div className="flex items-center w-5/12 mx-auto">
          <img src="/assets/dente.png" />
          <p>Pré-avaliação</p>
        </div>
        <div className="flex items-center w-5/12 mx-auto ">
          <img src="/assets/dente.png" />
          <p>Aparelhos Dentários</p>
        </div>
        <div className="flex items-center w-5/12 mx-auto">
          <img src="/assets/dente.png" />
          <p>Raio-X-digital</p>
        </div>
        <div className="flex items-center w-5/12 mx-auto">
          <img src="/assets/dente.png" />
          <p>Clareamento dental</p>
        </div>
      </div>
    </div>
  );
}
