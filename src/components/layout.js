import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className='flex flex-end'>
      <Navbar />
      <div className="text-content bg-white w-full">
        {children}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
