import { Link } from "gatsby";
import React from "react";
import Navbar from './navbar'

import textLogo from "../assets/text-logo.png";
import downloadIcon from '../assets/download-icon.svg'

const Header = () => (
    <div>
      <header class='bg-white w-full'>
        <div class='flex flex-row items-center justify-around'>
          <Link to="/">
            <img src={textLogo} alt="Alpha Brands Logo" />
          </Link>
          <Navbar />
          <button className='btn hidden md:flex'>CATÁLOGO
              <img class='ml-3' src={downloadIcon} alt='download'/>
          </button>
        </div>
      </header>
    </div>
  );
  
  export default Header;