import React, { useState } from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Catalog from "./catalog";
import Modal from "./modal";
import PrimaryButton from "./primary-button";
import MenuImg from "../images/svg/menu.svg";
import AlphaLogo from "../images/svg/textlogo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const mobileNav = () => (
    <Modal
      show={open}
      onClick={() => setOpen(!open)}
      width="w-3/4 md:w-2/5"
      alignment="justify-end"
      children={
        <ul className="h-full sm:h-auto w-full flex flex-col mt-8 pt-4 sm:pt-0 md:pt-4 px-4 md:px-0">
          <li className="my-2.5 p-3 w-full nav-text">
            <Link to="#nuestras-marcas" onClick={() => setOpen(false)}>
              NUESTRAS MARCAS
            </Link>
          </li>
          <li className="my-2.5 p-3 w-full nav-text">
            <Link to="#nosotros" onClick={() => setOpen(false)}>
              CONÓZCANOS
            </Link>
          </li>
          <li className="my-2.5 p-3 w-full nav-text">
            <Link to="#contacto" onClick={() => setOpen(false)}>
              CONTACTO
            </Link>
          </li>
          <li className="my-8 sm:my-4 md:my-10">
            <PrimaryButton
              className="py-3 btn-sideBar"
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
          className="h-screen md:h-auto md:w-11/12"
        />
      )}
      {open && mobileNav()}
      <div className="fixed text-sm uppercase top-0 z-40 bg-white nav-container md:px-6 lg:px-12 p-2 xl:px-32 flex w-full justify-start md:justify-between lg:justify-around items-center shadow-main">
        <div className="flex justify-between items-center w-full xl:w-desktopsize">
          <Link
            className="ml-5 md:ml-0 w-logoNav h-logoNav md:w-logoNavMd md:h-logoNavMd lg:h-logoNavLg lg:w-logoNavLg "
            title="Alpha Brands"
            to="/"
          >
            <div className="md:h-10  ml-2 h-auto">
              <AlphaLogo />
            </div>
          </Link>
          <div className="font-poppins hidden lg:flex items-center w-2/4 md:justify-between lg:justify-around">
            <AnchorLink
              className="nav-text hover:text-blue"
              to="/#nuestras-marcas"
              title="Marcas Alpha Brands"
            >
              Nuestras Marcas
            </AnchorLink>
            <AnchorLink
              className="nav-text hover:text-blue"
              to="/#nosotros"
              title="Qué es Alpha Brands"
            >
              Conózcanos
            </AnchorLink>
            <AnchorLink
              className="nav-text hover:text-blue"
              to="/#contacto"
              title="Contacto Alpha Brands"
            >
              Contacto
            </AnchorLink>
          </div>
          <PrimaryButton
            className="hidden btn-navbar px-5 py-3 lg:flex"
            title="CATÁLOGO"
            icon={true}
            onClick={() => setShowModal(true)}
          />
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden mr-5 md:mr-8 absolute z-20 right-0 pr-3"
          >
            <MenuImg />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
