import { Link } from "gatsby";
import React from "react";
import Navbar from "./navbar";
import PrimaryButton from "./primary-button";

const Header = () => (
  <div>
    <header className="bg-white h-20">
      <div className="flex flex-row items-center justify-between w-full h-full">
        <Link className="ml-8" to="/#">
          <div className="w-32 ml-2 h-auto">
            <Image
              className=""
              alt="Alpha-Brands Logo"
              filename="textlogo"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </div>
        </Link>
        <Navbar />
        <PrimaryButton title="Catálogo" icon={true} />
      </div>
    </header>
  </div>
);

export default Header;
