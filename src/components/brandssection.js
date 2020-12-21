import React, { useState, useEffect } from "react";
import Brand from "./brand";
import Modal from "./modal";
import PrimaryButton from "./primary-button";
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
    <section id="brand-section" className={`${toggle ? 'mb-16 sm:mb-0' : 'mb-32 sm:mb-16'} sm:mt-9 md:mt-0 sm:px-2 flex justify-center`}>
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
          className="h-screen md:h-auto md:w-11/12"
        />
      )}
      <div className="md:pt-16 w-full xl:w-desktopsize flex-col flex md:block">
        <PrimaryButton
          className="sm:hidden btn-hero mt-9 mb-12"
          title="DESCARGAR CATÁLOGO"
          onClick={() => setShowCatalog(true)}
        />
        <div className="flex items-center lg:block lg:mb-nuestrasMarcas mb-6 md:mb-10 w-full">
          <h3 id="nuestras-marcas" className="header text-black font-bold">NUESTRAS MARCAS</h3>
          <div className="flex justify-end items-center">
            <button
              className="lg:mt-7 text-blueBright text-lg xl:text-xl "
              onClick={() => setToggle(!toggle)}
            >
              <span className="font-opensans hidden hover:text-blue lg:block">
                {toggle ? "Ver menos" : "Ver todas"}
              </span>
              {toggle ? (
                <UpImg className="lg:hidden ml-2 text-content" />
              ) : (
                  <DownImg className="lg:hidden ml-2 text-content" />
                )}
            </button>
          </div>
        </div>
        <div
          className={`flex sm:justify-start -mx-3 sm:-mx-2 md:-mx-4 ${toggle && "flex-wrap flex-brands"
            }`}
        >
          {brands.edges.map((element, i) => (
            <button
              key={i}
              onClick={() => brandClick(element)}
              className={`${toggle && "mb-20"
                } image mx-2 sm:mx-1.5 md:mx-brandMarginMd lg:mx-brandMargin shadow-main hover:shadow-hov bg-white
              ${!toggle &&
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
              <p className="mt-4 md:hidden font-opensans font-semibold text-xs text-center text-black">
                {element.node.title}
              </p>
            </button>
          ))}
        </div>
        {!toggle && (
          <input
            className="hidden mt-14 lg:block w-full"
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
