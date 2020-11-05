import { Link } from "gatsby";
import React from "react";
import Navbar from './navbar'

import textLogo from "../assets/text-logo.png";
import downloadIcon from '../assets/download-icon.svg'
import PrimaryButton from "./primary-button";


const Header = () => (
  <div>
    <header class='bg-white w-full'>
      <div class='flex flex-row items-center justify-between'>
        <Navbar />
      </div>
    </header>
  </div>
);

export default Header;
