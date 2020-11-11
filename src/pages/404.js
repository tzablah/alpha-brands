import React from "react";
import {Link} from 'gatsby'
import PrimaryButton from "../components/primary-button";




const NotFoundPage = () => (
  <div className='w-full h-full text-center mt-64'>
    <h1 className='text-blue2 font-bold text-3xl'>ERROR 404</h1>
    <p className='text-2xl mb-20'>Página no encontrada</p>
    <Link to='/'>
      <PrimaryButton title='Volver al Inicio' className='w-64'></PrimaryButton>
      </Link>
  </div>
);

export default NotFoundPage;
