import React from "react";
import PrimaryButton from "./primary-button"
import Title from "./title"

const Brand = ({ title, description, imgs }) => {
  return (
    <div className="container mx-auto py-8 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex flex-wrap justify-center">
        {imgs.map((img, i) => (
          <img key={i} src={img} className="w-2/5 p-4" />
        ))}
      </div>
      <div className="w-full md:w-1/2 pl-0 md:pl-8 mt-6">
        <Title text={title} />
        <p className="text-sm my-4">{description}</p>
        <p className="font-semibold text-sm my-6">
          Para ver todos los productos disponibles de esta marca, descarga nuestro catálogo completo.
        </p>
        <PrimaryButton
          className="flex"
          title="DESCARGAR CATÁLOGO"
        // onClick={() => setShowModal(true)}
        />
      </div>
    </div>
  )
}

export default Brand;