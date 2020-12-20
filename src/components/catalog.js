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
    e.preventDefault();
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
          if (docuref.current === undefined) {
            return AlphaResponse.fire({
              title: <Title text="No se puede iniciar la descarga" sans />,
              text: "Debes llenar los campos de Nombre y Email para continuar",
              icon: "error",
              confirmButtonText: "Ok",
            });
          }
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
      <Title text="Catálogo de AlphaBrands" sans />
      <p className="mt-4 font-opensans text-content text-sm md:text-sm lg:text-base">
        Compártenos tu información para poder descargar nuestro catálogo
        <br className="hidden sm:block" /> de productos completo.
      </p>
      <form
        action="/success"
        name="catalog"
        method="post"
        data-netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center mt-12 xl:mt-9">
          <input type="hidden" name="form-name" value="catalog" />
          <input
            className="w-inputSm md:w-inputMd md:h-inputMd lg:inputLg h-12 my-3 p-4  placeholder-input bg-gray text-sm"
            placeholder="Nombre"
            name="name"
            onChange={handleInputs}
          />
          <input
            className="w-inputSm md:w-inputMd md:h-inputMd lg:inputLg h-12 my-3 p-4 placeholder-input bg-gray text-sm"
            placeholder="Correo electrónico"
            name="email"
            type="email"
            onChange={handleInputs}
          />
          <input
            className="w-inputSm md:w-inputMd md:h-inputMd lg:inputLg h-12 my-3 p-4 placeholder-input bg-gray text-sm"
            placeholder="Teléfono (opcional)"
            name="phone"
            type="text"
            onChange={handleInputs}
          />

          <PrimaryButton
            type="submit"
            className={` mt-8 w-full sm:w-72 ${
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
