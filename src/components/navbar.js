import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";


var navbar = document.querySelector(".navbar")
var ham = document.querySelector(".ham")

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger(){
  navbar.classList.toggle("showNav")
  ham.classList.toggle("showClose")
}

ham.addEventListener("click", toggleHamburger)

// toggle when clicking on links

// METHOD 1
var menuLinks = document.querySelectorAll(".menuLink")
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
)

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
      <div class='flex md:hidden'>
        <button class="ham"></button>
        <nav class="navbar">
          <ul>
            <li><a class="menuLink" href="/">Nuestras Marcas</a></li>
            <li><a class="menuLink" href="/">Conózcanos</a></li>
            <li><a class="menuLink" href="/">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};



export default Navbar;
