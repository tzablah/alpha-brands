import { Link } from "gatsby";
import React from "react";
import Navbar from './navbar'

import textLogo from "../assets/text-logo.png";
import downloadIcon from '../assets/download-icon.svg'


const Header = () => (
    <div>
      <header class='bg-white w-full'>
        <div class='flex flex-row items-center justify-between'>
          <Link className='ml-3' to="/">
            <img src={textLogo} alt="Alpha Brands Logo" />
          </Link>
          <Navbar />
          <button className='mr-3 btn hidden md:flex'>CATÁLOGO
              <img className='ml-3' src={downloadIcon} alt='download'/>
          </button>
        </div>
      </header>
    </div>
  );
  
  export default Header;