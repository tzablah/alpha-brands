import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="text-content mt-12 lg:mt-16">
      <Navbar />
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
