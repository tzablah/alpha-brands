import React, { useState } from "react";
import { graphql } from "gatsby";
import BackGroundImage from "gatsby-background-image";
import BrandsSection from "../components/brandssection"
import Catalog from "../components/catalog"
import ContactSection from "../components/contactsection";
import Distributors from "../components/distributors"
import InfoSection from "../components/infosection";
import Layout from "../components/layout";
import Modal from "../components/modal"
import PrimaryButton from "../components/primary-button"

export default function Home({ data }) {
  const [showModal, setShowModal] = useState(false)
  const [showCatalog, setShowCatalog] = useState(false)

  return (
    <div>
      {(showModal || showCatalog) &&
        <Modal
          show={showModal || showCatalog}
          onClick={() => {
            setShowModal(false)
            setShowCatalog(false)
          }}
          children={showModal ? <Distributors /> : showCatalog ? <Catalog /> : ''}
        />
      }
      <Layout>
        <BackGroundImage
          className="w-screen m-0 flex flex-col justify-center items-center py-24 sm:py-40 lg:py-64"
          fluid={data.heroImage.childImageSharp.fluid}
        >
          <h1 className="px-4 text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-widest">
            MARCAS INNOVADORAS DE LATINOÁMERICA
          </h1>
          <PrimaryButton
            className="hidden px-5 py-3 md:py-5 md:px-12 md:flex mt-12"
            title="DESCARGAR CATÁLOGO"
            onClick={() => setShowCatalog(true)}
          />
        </BackGroundImage>
        <BrandsSection />
        <section id='nosotros' className="container mx-auto w-full">
          <InfoSection
            title="NOSOTROS"
            id="#nosotros"
            image="gatsby-astronaut.png"
            position="right"
            text="Sabemos que en la vida se aprecia una mano amiga y nosotros queremos brindártela. Nuestros productos son de alta calidad, sostenibles, innovadores y sobre todos accesibles para acompañarte a ti y a tu familia en el día a día."
          />
          <InfoSection
            title="NUESTRO OBJETIVO"
            image="gatsby-astronaut.png"
            position="left"
            text="Queremos facilitarte la vida. Cada uno de nuestros productos está pensado con funcionalidad, dedicación y pasión porque sabemos que tu familia sólo se merece lo mejor."
          />
          <InfoSection
            title="DÓNDE ESTAMOS"
            image="gatsby-astronaut.png"
            position="right"
            text={
              <div>
                <p>
                  Actualmente vendemos a distribuidores en
                  El Salvador, Honduras, Guatemala y Costa Rica.
                </p>
                <button className="mt-4 text-blue2 hover:text-blue text-base" onClick={() => setShowModal(true)}>
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
