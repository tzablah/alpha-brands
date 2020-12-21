import React, { useState, useEffect } from "react";
import Brand from "./brand";
import Modal from "./modal";
import PrimaryButton from "./primary-button";
import Title from "./title";
import DownImg from "../images/svg/chevron-down.svg";
import UpImg from "../images/svg/chevron-up.svg";
import Catalog from "./catalog";
import Img from "gatsby-image";
const BrandsSection = ({ brands }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [width, setWidth] = useState(0);
  const [element, setElement] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const brandClick = (element) => {
    setElement(element);
    setShowModal(true);
  };

  return (
    <section id="brand-section" className="px-2 flex justify-center">
      {console.log(width)}
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
          className="md:h-auto md:w-11/12"
        />
      )}
      <div className="md:pt-16 w-full xl:w-desktopsize flex-col flex items-center md:block">
        <PrimaryButton
          className="md:hidden btn-hero mt-9 mb-12"
          title="DESCARGAR CATÁLOGO"
          onClick={() => setShowCatalog(true)}
        />
        <div className="flex items-center sm:block mb-nuestrasMarcas w-full">
          <h3 id="nuestras-marcas" className="header text-black font-bold">
            NUESTRAS MARCAS
          </h3>
          <div className="flex justify-end">
            <button
              className="md:mt-7 text-blueBright text-lg xl:text-xl "
              onClick={() => setToggle(!toggle)}
            >
              <span className="font-opensans hidden hover:text-blue sm:block">
                {toggle ? "Ver menos" : "Ver todas"}
              </span>
              {toggle ? (
                <UpImg className="sm:hidden ml-2 text-content" />
              ) : (
                <DownImg className="sm:hidden ml-2 text-content" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`mb-16 flex sm:mb-0 lg:justify-start sm:-mx-4 ${
            toggle && "flex-wrap flex-brands"
          }`}
        >
          {brands.edges.map((element, i) => (
            <button
              key={i}
              onClick={() => brandClick(element)}
              className={`${
                toggle && "mb-12"
              } image mx-1.5 md:mx-brandMarginMd lg:mx-brandMargin shadow-main hover:shadow-hov bg-white
              ${
                !toggle &&
                (i > slideIndex + (width > 767 ? 3 : 2) || i < slideIndex) &&
                "hidden"
              }`}
            >
              <div className="flex justify-center items-center w-full h-full">
                <Img
                  fluid={element.node.imagen[0].fluid}
                  style={{ height: "80%", width: "80%" }}
                  imgStyle={{
                    objectFit: "cover",
                  }}
                  alt={element.node.title}
                />
              </div>
              <p className="sm:hidden font-opensans font-bold text-xs text-center text-black">
                {element.node.title}
              </p>
            </button>
          ))}
        </div>
        {!toggle && (
          <input
            className="hidden mt-14 sm:block w-full"
            onChange={(e) => setSlideIndex(Number(e.target.value))}
            value={slideIndex}
            type="range"
            min={0}
            max={brands.edges.length - 4}
          />
        )}
      </div>
    </section>
  );
};

export default BrandsSection;
