import React, { useState } from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Catalog from "./catalog";
import Modal from "./modal";
import PrimaryButton from "./primary-button";
import downloadIcon from "../images/download-icon.svg";
import MenuImg from "../images/menu.svg";
//import textLogo from "../images/textlogo.png";
import Image from "./image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const mobileNav = () => (
    <Modal
      show={open}
      onClick={() => setOpen(!open)}
      width="w-3/4"
      alignment="justify-end"
      children={
        <ul className="h-full w-full flex flex-col mt-8 pt-4">
          <li className="my-3 focus:bg-lightBlue focus:text-blue  active:bg-lightBlue active:text-blue   p-3 w-full tracking-widest text-base">
            <Link to="#nuestras-marcas" onClick={() => setOpen(false)}>
              NUESTRAS MARCAS
            </Link>
          </li>
          <li className="my-5 focus:bg-lightBlue focus:text-blue   active:bg-lightBlue active:text-blue  p-3 w-full tracking-widest text-base">
            <Link to="#nosotros" onClick={() => setOpen(false)}>
              CONÓZCANOS
            </Link>
          </li>
          <li className="my-8 focus:bg-lightBlue focus:text-blue  active:bg-lightBlue active:text-blue   p-3 w-full tracking-widest text-base">
            <Link to="#contacto" onClick={() => setOpen(false)}>
              CONTACTO
            </Link>
          </li>
          <li className="my-8">
            <PrimaryButton
              className="flex w-full"
              title="CATÁLOGO"
              icon={true}
              onClick={() => {
                setShowModal(true);
                setOpen(false);
              }}
            />
          </li>
        </ul>
      }
    />
  );

  return (
    <>
      {showModal && (
        <Modal
          show={showModal}
          onClick={() => setShowModal(false)}
          children={<Catalog />}
        />
      )}
      {open && mobileNav()}
      <div className="fixed top-0 z-40 bg-white p-2 flex w-full justify-start md:justify-between lg:justify-around items-center shadow">
        <Link to="/">
          <div className="w-32 ml-2 h-auto">
            <Image
              className=""
              alt="Alpha-Brands Logo"
              filename="textlogo"
              objectFit="cover"
              objectPosition="50% 50%"
            />
            {/*  <img
              src={textLogo}
              alt="Alpha Brands Logo"
              className="w-32 sm:w-40 lg:w-full"
            /> */}
          </div>
        </Link>
        <div className="hidden md:flex items-center w-2/5 md:justify-between lg:justify-around">
          <AnchorLink className="hover:text-blue" to="/#nuestras-marcas">
            Nuestras Marcas
          </AnchorLink>
          <AnchorLink className="hover:text-blue" to="/#nosotros">
            Conózcanos
          </AnchorLink>
          <AnchorLink className="hover:text-blue" to="/#contacto">
            Contacto
          </AnchorLink>
        </div>
        <PrimaryButton
          className="hidden md:flex"
          title="CATÁLOGO"
          icon={downloadIcon}
          onClick={() => setShowModal(true)}
        />
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden absolute z-20 right-0 pr-3"
        >
          <MenuImg className="text-blue" />
          {/* <img src={menuImg} /> */}
        </button>
      </div>
    </>
  );
};

export default Navbar;
