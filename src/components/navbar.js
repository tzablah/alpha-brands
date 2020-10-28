import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Navbar = () => {
  return (
    <>
      <div class='w-1/2 flex-row justify-between  hidden md:flex'>
        <p>
          <AnchorLink to='/#brands'> Nuestra Marcas</AnchorLink>
        </p>
        <p>
          <AnchorLink to="/#aboutus">Conózcanos</AnchorLink>
        </p>
        <p>
          <AnchorLink to="/#contacto">Contacto</AnchorLink>
        </p>
      </div>
      <div class='block md:hidden'>
        <p>dsddsc</p>
      </div>
    </>
  );
};

export default Navbar;