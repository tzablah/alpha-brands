import React, { useState } from "react"
import { Link } from 'gatsby'
import Catalog from "./catalog"
import Modal from "./modal"
import PrimaryButton from "./primary-button"
import downloadIcon from '../images/download-icon.svg'
import menuImg from "../images/menu.svg"
import textLogo from "../images/text-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false)

  const mobileNav = () => (
    <Modal
      show={open}
      onClick={() => setOpen(!open)}
      width="w-2/3"
      alignment="justify-end"
      children={
        <ul className="h-full w-full flex ml-5 flex-col pt-4">
          <li className="my-8">
            <Link to="#nuestras-marcas" onClick={() => setOpen(false)}>NUESTRAS MARCAS</Link>
          </li>
          <li className="my-8">
            <Link to="#nosotros" onClick={() => setOpen(false)}>CONÓZCANOS</Link>
          </li>
          <li className="my-8">
            <Link to="#contacto" onClick={() => setOpen(false)}>CONTACTO</Link>
          </li>
          <li className="my-8">
            <PrimaryButton
              className="flex"
              title="CATÁLOGO"
              icon={downloadIcon}
              onClick={() => {
                setShowModal(true)
                setOpen(false)
              }}
            />
          </li>
        </ul>}
    />
  )

  return (
    <>
      {showModal &&
        <Modal
          show={showModal}
          onClick={() => setShowModal(false)}
          children={<Catalog />}
        />
      }
      {open && mobileNav()}
      <div className="fixed top-0 z-40 bg-white p-2 flex w-full justify-start md:justify-between lg:justify-around items-center shadow-md">
        <Link to="/">
          <img src={textLogo} alt="Alpha Brands Logo" className="w-32 sm:w-40 lg:w-full" />
        </Link>
        <div className="hidden md:flex items-center w-2/5 md:justify-between lg:justify-around">
          <Link to="#nuestras-marcas">Nuestras Marcas</Link>
          <Link to="#nosotros">Conózcanos</Link>
          <Link to="#contacto">Contacto</Link>
        </div>
        <PrimaryButton
          className="hidden md:flex"
          title="CATÁLOGO"
          icon={downloadIcon}
          onClick={() => setShowModal(true)}
        />
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden absolute z-20 right-0 pr-3">
          <img src={menuImg} />
        </button>
      </div>
    </>
  );
};

export default Navbar;
