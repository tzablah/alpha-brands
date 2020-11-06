import React, { useState } from "react";
import PrimaryButton from "./primary-button"
import Title from "./title"

const Catalog = () => {
  const [form, setForm] = useState({});
  const valid = Object.values(form).length === 3;

  const handleInputs = (e) => {
    e.persist();
    setForm((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="container mx-auto text-center py-8">
      <Title text="Catálogo de AlphaBrands" />
      <p className="text-base my-6">
        Compártanos tu información para poder descargar nuestro catálogo
       <br className="hidden sm:block" /> de productos completo.
      </p>
      <div className="flex flex-col items-center mt-6 sm:mt-12">
        <input
          className="w-11/12 xl:w-1/2 h-12 my-3 p-4 bg-gray"
          placeholder="Nombre"
          name="Nombre"
          onChange={handleInputs}
        />
        <input
          className="w-11/12 xl:w-1/2 h-12 my-3 p-4 bg-gray"
          placeholder="Correo electrónico"
          name="Correo electrónico"
          type="email"
          onChange={handleInputs}
        />
        <input
          className="w-11/12 xl:w-1/2 h-12 my-3 p-4 bg-gray"
          placeholder="Teléfono (opcional)"
          name="Mensaje"
          type="number"
          onChange={handleInputs}
        />
        <PrimaryButton
          className={`flex mt-8 ${!valid && "opacity-50 cursor-not-allowed"}`}
          title="DESCARGAR CATÁLOGO"
        // onClick={() => setShowModal(true)}
        />
      </div>
    </div>
  )
}

export default Catalog;