import React, { useState, useRef } from "react";
import PrimaryButton from "./primary-button";
import Title from "./title";
import documento from "../images/docs/sheet.pdf";
const Catalog = () => {
  const [form, setForm] = useState({});
  const docuref = useRef();
  const valid = Object.values(form).length >= 2;
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const handleInputs = (e) => {
    e.persist();
    setForm((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form, "no tenemos form ??");
    const formName = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": formName.getAttribute("name"), ...form }),
    })
      .then((resp) => {
        console.log("si llegamos", resp, form);
        if (resp.status === 200) {
          console.log(resp);
          return docuref.current.click();
          //window.location.replace(`/success`);
        }
      })
      .then(() => window.location.replace(`/`))
      .catch((error) => alert(error));
  };
  const handleDownloadCatalog = () => {
    return;
  };
  return (
    <div className="container mx-auto text-center py-8">
      <p className="subheader">Catálogo de AlphaBrands</p>
      <p className="mt-3 md:mt-4 secondary-text">
        Compártenos tu información para poder descargar nuestro
        <br className="hidden md:block xl:hidden" /> catálogo
        <br className="hidden sm:block md:hidden xl:block" /> de productos completo.
      </p>
      <form
        action="/success"
        name="catalog"
        method="post"
        data-netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center mt-10 md:mt-12 xl:mt-9">
          <input type="hidden" name="form-name" value="catalog" />
          <input
            className="input-size mt-0 mb-4 md:my-3 p-4  secondary-text bg-gray text-sm"
            placeholder="Nombre"
            name="name"
            onChange={handleInputs}
          />
          <input
            className="input-size mt-0 mb-4 md:my-3 p-4 secondary-text bg-gray text-sm"
            placeholder="Correo electrónico"
            name="email"
            type="email"
            onChange={handleInputs}
          />
          <input
            className="input-size mt-0 mb-4 md:my-3 p-4 secondary-text bg-gray text-sm"
            placeholder="Teléfono (opcional)"
            name="phone"
            type="text"
            onChange={handleInputs}
          />

          <PrimaryButton
            type="submit"
            className={`mt-7 btn-modal ${!valid && "opacity-50 cursor-not-allowed disabled"
              }`}
            title="DESCARGAR CATÁLOGO"
          // onClick={() => handleDownloadCatalog()}
          />
        </div>
      </form>
      <a
        ref={docuref}
        href={documento}
        className={`hidden`}
        target="_blank"
        rel="noreferrer"
      ></a>
    </div>
  );
};

export default Catalog;
