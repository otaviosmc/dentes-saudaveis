import React from "react";

export default function Texto(props) {
  return (
    <div className="flex flex-col items-center gap-4 p-4 md:w-4/12">
      <h3 className="text-xl font-bold">{props.titulo}</h3>
      <p>{props.texto}</p>
    </div>
  );
}
