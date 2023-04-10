import React from "react";

export default function Cliente(props) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center py-4 md:w-5/12 lg:w-3/12">
      <img
        className="rounded-full w-48 h-48 object-cover"
        src={props.img}
        alt="Cliente"
      />
      <p>{props.nome}</p>
      <p>{props.depoimento}</p>
    </div>
  );
}
