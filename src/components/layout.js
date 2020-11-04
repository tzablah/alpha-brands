import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="text-content">
      <Header />
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
