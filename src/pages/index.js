import React, { useState } from "react";
import { graphql } from "gatsby";
import BackGroundImage from "gatsby-background-image";
import BrandsSection from "../components/brandssection"
import ContactSection from "../components/contactsection";
import Distributors from "../components/distributors"
import InfoSection from "../components/infosection";
import Layout from "../components/layout";
import Modal from "../components/modal"
import PrimaryButton from "../components/primary-button"

export default function Home({ data }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      {showModal &&
        <Modal
          show={showModal}
          onClick={() => setShowModal(false)}
          children={<Distributors />}
        />
      }
      <Layout>
        <BackGroundImage
          className="w-screen flex flex-col justify-center items-center py-24 sm:py-40 lg:py-64"
          fluid={data.heroImage.childImageSharp.fluid}
        >
          <h1 className="px-4 text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-widest">
            MARCAS INNOVADORAS DE LATINOÁMERICA
          </h1>
          <PrimaryButton
            className="hidden md:flex mt-12"
            title="DESCARGAR CATÁLOGO"
          // onClick={() => setShowModal(true)}
          />
        </BackGroundImage>
        <BrandsSection />
        <section id='nosotros' className="container mx-auto">
          <InfoSection
            title="NOSOTROS"
            id="#nosotros"
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
            text={
              <div>
                <p>
                  Actualmente vendemos a distribuidores en
                  El Salvador, Honduras, Guatemala y Costa Rica.
                </p>
                <button className="mt-4 text-blue2" onClick={() => setShowModal(true)}>
                  Nuestros distribuidores
                </button>
              </div>
            }
          />
        </section>
        <ContactSection />
      </Layout>
    </div>
  );
}

export const hero = graphql`
  query {
    heroImage: file(relativePath: { regex: "/background.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
          originalName
        }
      }
    }
  }
`;
