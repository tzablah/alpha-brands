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
          <li className="my-3 text-navgray focus:bg-lightBlue focus:text-blue p-3 w-full tracking-widest text-base">
            <Link to="#nuestras-marcas" onClick={() => setOpen(false)}>
              NUESTRAS MARCAS
            </Link>
          </li>
          <li className="my-5 text-navgray focus:bg-lightBlue focus:text-blue p-3 w-full tracking-widest text-base">
            <Link to="#nosotros" onClick={() => setOpen(false)}>
              CONÓZCANOS
            </Link>
          </li>
          <li className="my-8 text-navgray focus:bg-lightBlue focus:text-blue p-3 w-full tracking-widest text-base">
            <Link to="#contacto" onClick={() => setOpen(false)}>
              CONTACTO
            </Link>
          </li>
          <li className="my-8">
            <PrimaryButton
              className="py-3"
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
      <div className="fixed text-sm uppercase top-0 z-40 bg-white md:h-24 md:px-20 p-2 xl:px-32 flex w-full justify-start md:justify-between lg:justify-around items-center shadow">
        {/*  <Link className="ml-5 md:ml-0" to="/">
          <img
            src={textLogo}
            alt="Alpha Brands Logo"
            className="w-32 sm:w-40 lg:w-full"
          />
        </Link> */}
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
        <div className="hidden lg:flex items-center w-2/4 md:justify-between lg:justify-around">
          <AnchorLink
            className="text-navgray tracking-widest hover:text-blue"
            to="/#nuestras-marcas"
          >
            Nuestras Marcas
          </AnchorLink>
          <AnchorLink
            className="text-navgray tracking-widest hover:text-blue"
            to="/#nosotros"
          >
            Conózcanos
          </AnchorLink>
          <AnchorLink
            className="text-navgray tracking-widest hover:text-blue"
            to="/#contacto"
          >
            Contacto
          </AnchorLink>
        </div>
        <PrimaryButton
          className="hidden px-5 py-3 lg:flex"
          title="CATÁLOGO"
          icon={true}
          onClick={() => setShowModal(true)}
        />
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden mr-5 md:mr-8 absolute z-20 right-0 pr-3"
        >
          <MenuImg />
          {/*  <img src={menuImg} /> */}
        </button>
      </div>
    </>
  );
};

export default Navbar;
