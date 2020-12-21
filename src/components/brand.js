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
    <div className="container pt-12 md:py-4 lg:py-6 flex items-center lg:items-start flex-col lg:flex-row md:px-3 xl:px-12">
      {showModal && (
        <Modal
          show={showModal}
          onClick={() => setShowModal(false)}
          children={<Catalog />}
          className="h-full md:h-auto md:w-11/12"
        />
      )}
      <div className="flex flex-wrap justify-start images-container">
        {imagen.map((img, i) => (
          <div
            key={i}
            className="flex-brand brand-modal modal-image"
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
      <div className="text-left sm:text-center lg:text-left mt-8 lg:mt-0 lg:ml-8 xl:ml-16 modal-xs lg:w-1/2">
        <p className="subheader ">{title}</p>
        <p className="secondary-text my-3 lg:my-4">{descripcion.descripcion}</p>
        <p className="font-semibold secondary-text my-6">
          Para ver todos los productos disponibles de esta marca,
          <br className="hidden sm:block lg:hidden" /> {""}
          descarga nuestro catálogo completo.
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
