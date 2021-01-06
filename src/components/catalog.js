import React, { useState, useRef } from "react";
import PrimaryButton from "./primary-button";
import Title from "./title";
import documento from "../images/docs/sheet.pdf";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const Catalog = () => {
  const [form, setForm] = useState({});
  const docuref = useRef();
  const AlphaResponse = withReactContent(Swal);
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
    const formName = e.target;
    e.preventDefault();
    if (docuref.current === undefined) {
      return AlphaResponse.fire({
        title: <Title text="No se puede iniciar la descarga" sans />,
        text: "Debes llenar los campos de Nombre y Email para continuar",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": formName.getAttribute("name"), ...form }),
    })
      .then((resp) => {
        console.log(resp.status);
        if (resp.status === 200) {
          docuref.current.click();
        }
      })
      .then(() => setTimeout(() => window.location.replace(`/`), 2000))
      .catch((error) =>
        AlphaResponse.fire({
          title: <Title text="No se puede iniciar la descarga" sans />,
          text: "A Ocurrido un error en el envio de datos",
          error,
          icon: "error",
          confirmButtonText: "Ok",
        })
      );
  };
  const handleDownloadCatalog = () => {
    return;
  };
  return (
    <div className="container mx-auto text-center py-8">
      <p className="subheader mt-8 sm:mt-0">Catálogo de AlphaBrands</p>
      <p className="mt-3 md:mt-4 secondary-text">
        Compártenos tu información para poder descargar nuestro
        <br className="hidden md:block xl:hidden" /> catálogo
        <br className="hidden sm:block md:hidden xl:block" /> de productos
        completo.
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
            className={`mt-7 btn-modal ${
              !valid && "opacity-50 cursor-not-allowed disabled"
            }`}
            title="DESCARGAR CATÁLOGO"
            // onClick={() => handleDownloadCatalog()}
          />
        </div>
      </form>
      {valid && (
        <a
          ref={docuref}
          href={documento}
          className={`hidden`}
          target="_blank"
          rel="noreferrer"
        ></a>
      )}
    </div>
  );
};

export default Catalog;
