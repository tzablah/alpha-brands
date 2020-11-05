import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="text-content">
      <Navbar />
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
