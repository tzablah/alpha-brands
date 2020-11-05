import React, { useState } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from 'gatsby'
import downloadIcon from '../assets/download-icon.svg'
import Modal from "./modal"
import Catalog from "./catalog"
import textLogo from "../assets/text-logo.png";
import menuImg from "../images/menu.svg"

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
          <li className="my-8"><Link to="/">NUESTRAS MARCAS</Link></li>
          <li className="my-8"><Link to="/">CONÓZCANOS</Link></li>
          <li className="my-8"><Link to="/">CONTACTO</Link></li>
          <li className="my-8">
            <button
              className='w-4/5 btn flex justify-center'
              onClick={() => {
                setShowModal(true)
                setOpen(false)
              }}>
              CATÁLOGO
            <img className='ml-3' src={downloadIcon} alt='download' />
            </button>
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
      <div className="p-2 flex w-full justify-start lg:justify-around items-center">
        <Link to="/">
          <img src={textLogo} alt="Alpha Brands Logo" className="w-3/5 sm:w-4/5 lg:w-full" />
        </Link>
        <div className="hidden lg:flex items-center w-1/3 justify-around">
          <AnchorLink to="#about">
            Nuestras Marcas
          </AnchorLink>
          <AnchorLink to="#nuestras-marcas">
            Conózcanos
          </AnchorLink>
          <AnchorLink to="#contacto">
            Contacto
          </AnchorLink>
        </div>
        <button className='mr-3 btn hidden lg:flex' onClick={() => setShowModal(true)}>
          CATÁLOGO
          <img className='ml-3' src={downloadIcon} alt='download' />
        </button>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden absolute z-20 right-0 pr-3">
          <img src={menuImg} />
        </button>
      </div>
    </>
  );
};



export default Navbar;
