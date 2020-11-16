import React from 'react';
import { Helmet } from 'react-helmet';
import ogImg from '../images/assets/seo.jpg'

const SEO = () => {
  return (
    <Helmet
      htmlAttributes={{
        lang: `es`
      }}
      title={`Alpha Brands: Marcas innovadoras de Latinoamérica`}
      meta={[
        {
          name: `description`,
          content: `Nuestros productos son de alta calidad, sostenibles, innovadores y 
          sobre todo accesibles para acompañarte a ti y a tu familia en el día a día.`
        },
        {
          property: `og:title`,
          content: `Alpha Brands: Marcas innovadoras de Latinoamérica`
        },
        {
          property: `og:description`,
          content: `Nuestros productos son de alta calidad, sostenibles, innovadores y 
          sobre todo accesibles para acompañarte a ti y a tu familia en el día a día.`
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:url`,
          //content: `https://konfio.mx${canonical}`
        },
        {
          property: `og:image`,
          content: ogImg
        },
        {
          property: `og:image:height`,
          content: 140
        },
        {
          property: `og:image:width`,
          content: 512
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: `Alpha Brands`
        },
        {
          name: `twitter:title`,
          content: `Alpha Brands: Marcas innovadoras de Latinoamérica`
        },
        {
          name: `twitter:description`,
          content: `Nuestros productos son de alta calidad, sostenibles, innovadores y 
          sobre todo accesibles para acompañarte a ti y a tu familia en el día a día.`
        },
        {
          name: `twitter:description`,
          content: `summary_large_image`
        },
        {
          name: `keywords`,
          content: `marca, alpha, brand, sostenible, innovador, producto, accesible, funcionalidad`
        },
        {
          name: `robots`,
          content: `INDEX,FOLLOW`
        },
      ]}
    >
      <link rel="canonical" href={"/"} />
    </Helmet>
  );
}

export default SEO;