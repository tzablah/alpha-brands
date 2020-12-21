import React from "react";
import SocialMediaFace from "../images/svg/Contact/facebook.svg";
import SocialMediaInsta from "../images/svg/Contact/instagram.svg";
//todo agreagr un link por imagen https://www.facebook.com/AlphabrandsSV/  https://www.instagram.com/alphabrands.sv/
const Footer = () => {
  return (
    <div className=" font-opensans text-xs md:text-base py-8 flex flex-col items-center">
      <div className="flex">
        <a href="https://www.facebook.com/AlphabrandsSV/">
          <SocialMediaFace className="mb-3 mr-6" />
        </a>
        <a href="https://www.instagram.com/alphabrands.sv/">
          <SocialMediaInsta className="mb-3" />
        </a>
      </div>

      <p>© AlphaBrands 2020</p>
    </div>
  );
};

export default Footer;
