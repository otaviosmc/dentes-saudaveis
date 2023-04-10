import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-900 p-6 flex justify-between items-center text-white fixed w-full">
      <Link to="/" className="flex items-center gap-4">
        <img className="w-6" src="/assets/dente.png" />
        <p className="hidden md:block text-3xl font-normal">Dentes Saudáveis</p>
      </Link>
      <div className="uppercase flex gap-4 font-bold">
        <Link to="/" className="">
          Home
        </Link>
        <Link to="/contato">Contato</Link>
      </div>
    </header>
  );
}
