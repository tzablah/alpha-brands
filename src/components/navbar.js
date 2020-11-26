import React, { useState } from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Catalog from "./catalog";
import Modal from "./modal";
import PrimaryButton from "./primary-button";
import MenuImg from "../images/svg/menu.svg";
import Image from "./image";
import AlphaLogo from '../images/svg/textlogo.svg'

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
          <li className="my-3 text-navgray focus:bg-lightBlue focus:text-blue active:bg-lightBlue p-3 w-full tracking-widest text-base">
            <Link to="#nuestras-marcas" onClick={() => setOpen(false)}>
              NUESTRAS MARCAS
            </Link>
          </li>
          <li className="my-5 text-navgray focus:bg-lightBlue focus:text-blue active:bg-lightBlue  p-3 w-full tracking-widest text-base">
            <Link to="#nosotros" onClick={() => setOpen(false)}>
              CONÓZCANOS
            </Link>
          </li>
          <li className="my-8 text-navgray focus:bg-lightBlue focus:text-blue active:bg-lightBlue p-3 w-full tracking-widest text-base">
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
        <div className='flex justify-between items-center w-full xl:w-desktopsize'>
          <Link className="ml-5 md:ml-0 w-logoNav h-logoNav md:w-logoNavMd md:h-logoNavMd lg:h-logoNavLg lg:w-logoNavLg " title="Alpha Brands" to="/">
            <div className="md:h-10  ml-2 h-auto">
              <AlphaLogo/>
            </div>
          </Link>
          <div className="hidden lg:flex items-center w-2/4 md:justify-between lg:justify-around">
            <AnchorLink
              className="text-navgray tracking-widest hover:text-blue"
              to="/#nuestras-marcas"
              title="Marcas Alpha Brands"
            >
              Nuestras Marcas
            </AnchorLink>
            <AnchorLink
              className="text-navgray tracking-widest hover:text-blue"
              to="/#nosotros"
              title="Qué es Alpha Brands"
            >
              Conózcanos
            </AnchorLink>
            <AnchorLink
              className="text-navgray tracking-widest hover:text-blue"
              to="/#contacto"
              title="Contacto Alpha Brands"
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
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
