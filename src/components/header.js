import { Link } from "gatsby";
import React from "react";
import Navbar from './navbar'

import textLogo from "../assets/text-logo.png";
import downloadIcon from '../assets/download-icon.svg'
import PrimaryButton from "./primary-button";


const Header = () => (
    <div>
      <header className='bg-white h-20'>
        <div className='flex flex-row items-center justify-between w-full h-full'>
          <Link className='ml-8' to="/#">
            <img className='w-3/4 md:w-full' src={textLogo} alt="Alpha Brands Logo" />
          </Link>
          <Navbar />
          <PrimaryButton title='Catálogo' icon={downloadIcon}/>
        </div>
      </header>
    </div>
  );
  
  export default Header;