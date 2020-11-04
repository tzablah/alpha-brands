import React, {useState} from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import {Link} from 'gatsby'
import downloadIcon from '../assets/download-icon.svg'


const Navbar = () => {
  const [open, toggleMenu] = useState(false);

  const mobileNav = () => (
        <div className={`${open ? 'flex' : 'hidden'}`}>
          <button className='showClose' onClick={ () => {toggleMenu(!open);}}></button>
          <nav className="navbar">
            <ul>
              <li><Link className="menuLink" to="/">Nuestras Marcas</Link></li>
              <li><Link className="menuLink" to="/">Conózcanos</Link></li>
              <li><Link className="menuLink" to="/">Contacto</Link></li>
              <li><button className='w-4/5 btn flex justify-center'>CATÁLOGO
                <img className='ml-3' src={downloadIcon} alt='download'/>
            </button>
            </li>
            </ul>
            
          </nav>
        </div>
  )

    return (
      <>
          <button 
              onClick={ () => {toggleMenu(!open);}}
              className={`${open ? 'hidden' : 'md:hidden ham'}`}
            >
            </button> 
            {open ? (
          mobileNav()
        ) : ( 
        <div className="md:w-2/4 flex justify-center relative">
          <div
            className={`${
              open ? "block" : "hidden"
            } px-2 pt-2 pb-4" sm:flex sm:p-0 w-full justify-between`}
          >
            <AnchorLink
              to="#about"
              className=""
            >
              Nuestras Marcas
            </AnchorLink>
            <AnchorLink
              to="#nuestras-marcas"
              className=""
            >
              Conózcanos
            </AnchorLink>
            <AnchorLink
              to="#contacto"
              className=""
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
