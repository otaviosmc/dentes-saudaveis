import React from "react";

export default function Medico(props) {
  return (
    <div className="flex flex-col gap-3 items-center md:w-5/12 lg:w-3/12">
      <img
        src={props.img}
        alt="Médico"
        className="rounded-full w-32 h-32 object-cover"
      />
      <p>{props.nome}</p>
      <p>{props.horario}</p>
    </div>
  );
}
