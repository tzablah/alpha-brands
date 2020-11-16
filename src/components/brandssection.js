import React, { useState, useEffect } from "react";
import Brand from "./brand";
import Modal from "./modal";
import PrimaryButton from "./primary-button";
import Title from "./title";
import downImg from "../images/svg/chevron-down.svg";
import upImg from "../images/svg/chevron-up.svg";
import Catalog from "./catalog";

const array = [
  {
    imgs: [downImg, upImg, downImg, upImg],
    title: "Terra Monte",
    description:
      "Decripción de la marca aquí. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500. ",
  },
  {
    imgs: [downImg, upImg, downImg, upImg],
    title: "Terra Monte",
    description:
      "Decripción de la marca aquí. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500. ",
  },
  {
    imgs: [downImg, upImg, downImg, upImg],
    title: "Terra Monte",
    description:
      "Decripción de la marca aquí. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500. ",
  },
  {
    imgs: [downImg, upImg, downImg, upImg],
    title: "Terra Monte",
    description:
      "Decripción de la marca aquí. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500. ",
  },
  {
    imgs: [downImg, upImg, downImg, upImg],
    title: "Terra Monte",
    description:
      "Decripción de la marca aquí. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500. ",
  },
  {
    imgs: [downImg, upImg, downImg, upImg],
    title: "Terra Monte",
    description:
      "Decripción de la marca aquí. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500. ",
  },
  {
    imgs: [downImg, upImg, downImg, upImg],
    title: "Terra Monte",
    description:
      "Decripción de la marca aquí. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500. ",
  },
  {
    imgs: [downImg, upImg, downImg, upImg],
    title: "Terra Monte",
    description:
      "Decripción de la marca aquí. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500. ",
  },
];

const BrandsSection = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [width, setWidth] = useState(0);
  const [element, setElement] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const brandClick = (element) => {
    setElement(element);
    setShowModal(true);
  };

  return (
    <section id="brand-section" className="px-2">
      {(showModal || showCatalog) && (
        <Modal
          show={showModal || showCatalog}
          onClick={() => {
            setShowModal(false);
            setShowCatalog(false);
          }}
          children={
            showModal ? <Brand {...element} /> : showCatalog ? <Catalog /> : ""
          }
        />
      )}
      <div className="md:py-16">
        <PrimaryButton
          className="md:hidden my-10"
          title="DESCARGAR CATÁLOGO"
          onClick={() => setShowCatalog(true)}
        />
        <div className="flex items-center sm:block">
          <Title text="NUESTRAS MARCAS" id="nuestras-marcas" />
          <div className="flex justify-end">
            <button
              className="sm:my-6 text-blue2 text-xl"
              onClick={() => setToggle(!toggle)}
            >
              <span className="hidden hover:text-blue sm:block">
                {toggle ? "Ver menos" : "Ver todas"}
              </span>
              <img className="sm:hidden ml-2" src={toggle ? upImg : downImg} />
            </button>
          </div>
        </div>
        <div
          className={`flex my-8 sm:mt-0 justify-center xl:justify-between sm:-mx-4 ${
            toggle && "flex-wrap"
          }`}
        >
          {array.map((element, i) => (
            <button
              key={i}
              onClick={() => brandClick(element)}
              className={`mx-2 sm:mx-4 w-24 md:w-40 my-2 sm:my-8 lg:w-48 xl:w-brandImage card-shadow h-24 md:h-40 lg:h-48 xl:h-64 bg-white
              ${
                !toggle &&
                (i > slideIndex + (width > 640 ? 3 : 2) || i < slideIndex) &&
                "hidden"
              }`}
            >
              <p>{i} Hola!</p>
            </button>
          ))}
        </div>
        {!toggle && (
          <input
            className="hidden sm:block w-full"
            onChange={(e) => setSlideIndex(Number(e.target.value))}
            value={slideIndex}
            type="range"
            min={0}
            max={array.length - 4}
          />
        )}
      </div>
    </section>
  );
};

export default BrandsSection;
