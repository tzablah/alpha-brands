import React, { useState } from "react";
import Catalog from "./catalog";
import Modal from "./modal";
import PrimaryButton from "./primary-button";
import Title from "./title";
import Img from "gatsby-image";
const Brand = ({ node }) => {
  const { descripcion, imagen, titulo } = node;
  const [showModal, setShowModal] = useState(false);
  console.log(titulo, descripcion, imagen,);
  return (
    <div className="container mx-auto md:py-8 flex flex-col md:flex-row">
      {showModal && (
        <Modal
          show={showModal}
          onClick={() => setShowModal(false)}
          children={<Catalog />}
        />
      )}
      <div className="flex flex-wrap justify-center lg:justify-space-around lg:w-6/12 lg:px-5">
        {imagen.map((img, i) => (
            <div className="brand_image h-brandProductSm w-brandProductSm md:h-brandProdcutMd md:w-brandProdcutMd lg:h-brandProductLg lg:w-brandProductLg m-2 lg:m-6">
              <Img
                key={i}
                fluid={img.fluid}
                style={{ height: "100%", width: "100%" }}
                imgStyle={{
                  objectFit: "cover",
                }}
                alt={titulo}
              />
            </div>  
        ))}
      </div>
      <div className="w-full text-justify md:w-1/2 pl-0 md:pl-8 mt-6">
        <Title text={titulo} />
        <p className="text-sm my-4">{descripcion.descripcion}</p>
        <p className="font-semibold text-sm my-6">
          Para ver todos los productos disponibles de esta marca, descarga
          nuestro catálogo completo.
        </p>
        <PrimaryButton
          title="DESCARGAR CATÁLOGO"
          onClick={() => setShowModal(true)}
          className= 'w-72'
        />
      </div>
    </div>
  );
};

export default Brand;
