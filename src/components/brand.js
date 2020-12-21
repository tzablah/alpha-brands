import React, { useState } from "react";
import Catalog from "./catalog";
import Modal from "./modal";
import PrimaryButton from "./primary-button";
import Title from "./title";
import Img from "gatsby-image";
const Brand = ({ node }) => {
  const { descripcion, imagen, title } = node;
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container pt-12 md:py-4 lg:py-6 flex flex-col lg:flex-row md:px-3 xl:px-12">
      {showModal && (
        <Modal
          show={showModal}
          onClick={() => setShowModal(false)}
          children={<Catalog />}
          className="h-full md:h-auto md:w-11/12"
        />
      )}
      <div className="flex flex-wrap justify-center">
        {imagen.map((img, i) => (
          <div
            key={i}
            className="flex justify-center items-center flex-brand brand-modal h-brandProductSm w-brandProductSm md:h-brandProdcutMd md:w-brandProdcutMd xl:h-brandProductLg xl:w-brandProductLg"
          >
            <Img
              key={i}
              fluid={img.fluid}
              style={{ height: "100%", width: "100%" }}
              imgStyle={{
                objectFit: "cover",
              }}
              alt={title}
            />
          </div>
        ))}
      </div>
      <div className="text-justify mt-6 lg:mt-0 lg:ml-8 xl:ml-16 lg:w-infoBrandLg xl:w-infoBrandXl">
        <Title text={title} sans />
        <p className="text-sm my-4 font-opensans">{descripcion.descripcion}</p>
        <p className="font-semibold text-sm my-6 font-opensans">
          Para ver todos los productos disponibles de esta marca, descarga
          nuestro catálogo completo.
        </p>
        <PrimaryButton
          title="DESCARGAR CATÁLOGO"
          onClick={() => setShowModal(true)}
          className="btn-modal"
        />
      </div>
    </div>
  );
};

export default Brand;
