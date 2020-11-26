import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import PrimaryButton from "../components/primary-button";
import catalogo from "../images/docs/sheet.pdf";
const Success = () => {
  const [form, setForm] = useState({});
  const buttonRef = useRef();
  useEffect(() => {
    setForm(JSON.parse(localStorage.getItem("form")));
  }, [form]);
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const handleSubmit = (e) => {
    /*  e.preventDefault();
    const formName = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": formName.getAttribute("name"), ...form }),
    })
      .then(() => console.log("done!!!"))
      .catch((error) => alert(error)); */
    console.log("echoooo");
  };
  return (
    <div className="w-full h-full text-center mt-40 md:mt-64 p-6">
      <h1 className="text-blue2 font-bold text-3xl">
        Los datos han sido enviados con exito
      </h1>
      <form
        name="catalog"
        method="post"
        data-netlify-honeypot="bot-field"
        data-netlify="true"
        hidden
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="catalog" />
        <input placeholder="Nombre" name="Nombre" value={form.name} />
        <input
          placeholder="Correo electrónico"
          name="Correo electrónico"
          type="email"
          value={form.email}
        />
        <input
          placeholder="Teléfono (opcional)"
          name="Numero"
          type="number"
          value={form.phone}
        />
        <button type="submit">send</button>
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
