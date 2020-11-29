import React from "react";
import { Link } from "gatsby";
import PrimaryButton from "../components/primary-button";

const NotFoundPage = () => (
  <div className="w-full h-full text-center mt-40 md:mt-64 p-6">
    <h1 className="font-poppins text-blueBright font-bold text-3xl">ERROR 404</h1>
    <p className="font-opensans text-2xl mb-12">Página no encontrada</p>
    <Link to="/">
      <PrimaryButton title="VOLVER AL INICIO" className='w-full md:w-72' />
    </Link>
  </div>
);

export default NotFoundPage;
