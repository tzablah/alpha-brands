import React, { useState } from "react";
import PrimaryButton from "./primary-button";
import Title from "./title";
import { Link } from "gatsby";
import Redirect from "@reach/router";
const Catalog = () => {
  const [form, setForm] = useState({});
  const valid = Object.values(form).length === 3;
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
      .then(() => <Redirect to="/success" />)
      .catch((error) => alert(error));
  };
  const handleDownloadCatalog = () => {
    localStorage.setItem("form", JSON.stringify(form));
  };
  return (
    <div className="container mx-auto text-center py-8">
      <Title text="Catálogo de AlphaBrands" />
      <p className="text-base my-6">
        Compártanos tu información para poder descargar nuestro catálogo
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
        <div className="flex flex-col items-center mt-6 sm:mt-12">
          <input type="hidden" name="form-name" value="catalog" />
          <input
            className="w-11/12 xl:w-1/2 h-12 my-3 p-4  placeholder-input bg-gray"
            placeholder="Nombre"
            name="name"
            onChange={handleInputs}
          />
          <input
            className="w-11/12 xl:w-1/2 h-12 my-3 p-4 placeholder-input bg-gray"
            placeholder="Correo electrónico"
            name="email"
            type="email"
            onChange={handleInputs}
          />
          <input
            className="w-11/12 xl:w-1/2 h-12 my-3 p-4 placeholder-input bg-gray"
            placeholder="Teléfono (opcional)"
            name="phone"
            type="number"
            onChange={handleInputs}
          />
          <Link to="/success">
            <PrimaryButton
              type="submit"
              className={` mt-8 w-72 ${
                !valid && "opacity-50 cursor-not-allowed"
              }`}
              title="DESCARGAR CATÁLOGO"
              onClick={() => handleDownloadCatalog()}
            />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Catalog;
