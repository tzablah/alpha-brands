import React, {useState} from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import {Link} from 'gatsby'
import downloadIcon from '../assets/download-icon.svg'
import PrimaryButton from "./primary-button";


const Navbar = () => {
  const [open, toggleMenu] = useState(false);

  const mobileNav = () => (
        <div className={`${open ? 'flex lg:hidden' : 'hidden'}`}>
          <button className='showClose' onClick={ () => {toggleMenu(!open);}}></button>
          <nav className="navbar">
            <ul>
              <li><Link className="menuLink" to="/">Nuestras Marcas</Link></li>
              <li><Link className="menuLink" to="/">Conózcanos</Link></li>
              <li><AnchorLink className="menuLink" to="/#contacto">Contacto</AnchorLink></li>
              <li>
              <PrimaryButton id='sideBarButton' title='Catálogo' icon={downloadIcon}/>
              </li>
            </ul>
            
          </nav>
        </div>
  )

    return (
      <>
          <button 
              onClick={ () => {toggleMenu(!open);}}
              className={`${open ? 'hidden' : 'lg:hidden ham'}`}
            >
            </button> 
            {open ? (
          mobileNav()
        ) : ( 
        <div className="md:w-6/12 md:mr-3 hidden lg:flex items-center justify-center relative">
          <div
            className='px-2 pt-2 pb-4" sm:flex sm:p-0 w-full justify-around'
          >
            <AnchorLink
              to="/#marcas"
              className='text-opacity-50 text-black hover:text-blue'
            >
              Nuestras Marcas
            </AnchorLink>
            <AnchorLink
              to="/#nosotros"
              className='text-opacity-50 text-black hover:text-blue'
            >
              Conózcanos
            </AnchorLink>
            <AnchorLink
              to="/#contacto"
              className='text-opacity-50 text-black hover:text-blue'
            >
              Contacto
            </AnchorLink>
          </div>
        
      </div>
      )}
    
      </>
    );
};



export default Navbar;
