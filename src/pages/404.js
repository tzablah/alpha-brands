import React from "react";
import { Link } from "gatsby";
import PrimaryButton from "../components/primary-button";

const NotFoundPage = () => (
  <div className="w-full h-full text-center mt-40 md:mt-64 p-6">
    <h1 className="text-blue2 font-bold text-3xl">ERROR 404</h1>
    <p className="text-2xl mb-12">Página no encontrada</p>
    <Link to="/">
      <PrimaryButton title="VOLVER AL INICIO" className='w-72' />
    </Link>
  </div>
);

export default NotFoundPage;
