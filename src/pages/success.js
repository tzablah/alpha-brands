import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import PrimaryButton from "../components/primary-button";
import catalogo from "../images/docs/sheet.pdf";
const Success = () => {
  const [form, setForm] = useState({});
  // const buttonRef = useRef();
  useEffect(() => {
    setForm(JSON.parse(localStorage.getItem("form")));
  }, []);
  return (
    <div className="w-full h-full text-center mt-40 md:mt-64 p-6">
      <h1 className="text-blue2 font-bold text-3xl">
        Los datos han sido enviados con exito
      </h1>
      <form
        name="catalog"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        hidden
      >
        <input type="hidden" name="form-name" value="catalog" />
        <input placeholder="Nombre" name="name" />
        <input placeholder="Correo electrónico" name="email" type="email" />
        <input placeholder="Teléfono (opcional)" name="phone" type="number" />
      </form>
      <p className="text-2xl mb-12">Gracias por tu informacion</p>
      <Link to="/">
        <PrimaryButton title="VOLVER AL INICIO" className="w-72" />
      </Link>

      <a
        href={catalogo}
        target="_blank"
        rel="noreferrer"
        className="flex justify-center h-10 mt-5"
      >
        <PrimaryButton
          title="CATÁLOGO"
          icon={true}
          className="flex  w-40 xl:w-72 items-center px-5 py-3"
        />
      </a>
    </div>
  );
};

export default Success;
