import React from "react";
import Layout from "../components/layout";
import ContactSection from '../components/contactsection'
import InfoSection from "../components/infosection";
import BackGroundImage from "gatsby-background-image";
import { graphql } from "gatsby";

export default function Home({ data }) {
  return (
    <div className="">
      <Layout>
        <BackGroundImage
          className="relative h-screen w-screen flex flex-col justify-center items-center "
          fluid={data.heroImage.childImageSharp.fluid}
        >
          <div
            data-aos="zoom-in"
            className="py-3 px-3 w-10/12 absolute b-solid border-4
             border-green-500  flex flex-col justify-center 
             items-center  shadow-md
             sm:max-w-lg 
             md:max-w-2xl
             lg:max-w-2xl
             xl:max-w-5xl
             "
          >
            <h1 className="text-center text-4xl font-bold mt-3 mb-3">
              Codice liber, Omnes in Codice
            </h1>
            <h3 className="xl:text-4xl lg:text-4xl tracking-wide  px-3 py-3 text-purplelight text-center text-3xl font-bold  leading-relaxed  mt-3 mb-3">
              Witchcraft & Magic for developers
            </h3>
            <button className="px-4 bg-orange-500 rounded-xl w-24 h-12">
              Go now
            </button>
          </div>
        </BackGroundImage>
        <div className="container mx-auto">
          <InfoSection
            title="NOSOTROS"
            image={data.heroImage}
            position="right"
            text="AlphaBrands es una compañía de confianza, basada en El Salvador, que se enfoca en desarrollar diversas marcas privadas en Latinoámerica."
          />
          <InfoSection
            title="NUESTRO OBJETIVO"
            image={data.heroImage}
            position="left"
            text="Queremos facilitarte la vida. Cada uno de nuestros productos está pensado con funcionalidad, dedicación y pasión porque sabemos que tu familia sólo se merece lo mejor."
          />
          <InfoSection
            title="DÓNDE ESTAMOS"
            image={data.heroImage}
            position="right"
            text="Actualmente vendemos a distribuidores en 
          El Salvador, Honduras, Guatemala y Costa Rica."
          />
        </div>
        <ContactSection />
      </Layout>
    </div>
  );
}

export const hero = graphql`
  query {
    heroImage: file(relativePath: { regex: "/bosque.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
          originalName
        }
      }
    }
  }
`;
