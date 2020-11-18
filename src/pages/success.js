import React from "react";
import { Link } from "gatsby";
import PrimaryButton from "../components/primary-button";
import catalogo from "../images/docs/sheet.pdf";
const Success = () => (
  <div className="w-full h-full text-center mt-40 md:mt-64 p-6">
    <h1 className="text-blue2 font-bold text-3xl">
      Los datos han sido enviados con exito
    </h1>
    <p className="text-2xl mb-12">Gracias por tu informacion</p>
    <Link to="/">
      <PrimaryButton title="VOLVER AL INICIO" />
    </Link>

    <a href={catalogo} target="_blank" rel="noreferrer">
      <PrimaryButton title="CATÁLOGO" icon={true} className="py-3 px-3" />
    </a>
  </div>
);

export default Success;
