import React from "react";
import Title from "./title"

const Brand = ({ title, description, imgs }) => {

  return (
    <div className="flex flex-col md:flex-row mt-8">
      <div className="w-full md:w-1/2 flex flex-wrap">
        {imgs.map((img, i) => (
          <img key={i} src={img} className="w-1/2 p-4" />
        ))}
      </div>
      <div className="w-full md:w-1/2 pl-0 md:pl-8 mt-6">
        <Title text={title} />
        <p className="text-sm my-4">{description}</p>
        <p className="font-semibold text-sm my-4">
          Para ver todos los productos disponibles de esta marca, descarga nuestro catálogo completo.
        </p>
      </div>
    </div>
  )
}

export default Brand;