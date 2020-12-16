import React, { useState } from "react";
import { graphql } from "gatsby";
import BackGroundImage from "gatsby-background-image";
import BrandsSection from "../components/brandssection";
import Catalog from "../components/catalog";
import ContactSection from "../components/contactsection";
import Distributors from "../components/distributors";
import InfoSection from "../components/infosection";
import Layout from "../components/layout";
import Modal from "../components/modal";
import PrimaryButton from "../components/primary-button";
import SEO from "../components/seo";

export default function Home({ data }) {
  const [showModal, setShowModal] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);
  const { brands, contactImage } = data;
  return (
    <div>
      {(showModal || showCatalog) && (
        <Modal
          show={showModal || showCatalog}
          onClick={() => {
            setShowModal(false);
            setShowCatalog(false);
          }}
          children={
            showModal ? <Distributors /> : showCatalog ? <Catalog /> : ""
          }
          className="h-screen md:h-auto md:w-11/12"
        />
      )}
      <Layout>
        <SEO />
        <BackGroundImage
          className="m-0 flex flex-col justify-center items-center py-24 md:py-40 lg:py-64"
          fluid={data.heroImage.childImageSharp.fluid}
          alt={data.heroImage.childImageSharp.fluid.originalName}
        >
          <h1 className="font-poppins px-4 text-center text-2xl md:text-brandmd lg:text-brandlg font-extrabold text-white tracking-widest">
            MARCAS INNOVADORAS DE LATINOÁMERICA
          </h1>
          <PrimaryButton
            className="hidden sm:flex w-full sm:w-72 mt-12"
            size="large"
            title="DESCARGAR CATÁLOGO"
            onClick={() => setShowCatalog(true)}
          />
        </BackGroundImage>

        <BrandsSection brands={brands} />
        <section id="nosotros" className="px-8 xl:px-16">
          <div className="flex flex-col items-center w-full">
            <InfoSection
              title="NOSOTROS"
              id="#nosotros"
              image="nosotros.svg"
              position="right"
              text="Sabemos que en la vida se aprecia una mano amiga y nosotros queremos brindártela. Nuestros productos son de alta calidad, sostenibles, innovadores y sobre todos accesibles para acompañarte a ti y a tu familia en el día a día."
            />
            <InfoSection
              title="NUESTRO OBJETIVO"
              image="objetivo.svg"
              position="left"
              text="Queremos facilitarte la vida. Cada uno de nuestros productos está pensado con funcionalidad, dedicación y pasión porque sabemos que tu familia sólo se merece lo mejor."
            />
            <InfoSection
              title="DÓNDE ESTAMOS"
              image="donde.svg"
              position="right"
              text={
                <div>
                  <p>
                    Actualmente vendemos a distribuidores en El Salvador,
                    Honduras, Guatemala y Costa Rica.
                  </p>
                  <button
                    className="mt-4 text-blueBright hover:text-blue text-base"
                    onClick={() => setShowModal(true)}
                  >
                    Nuestros distribuidores
                  </button>
                </div>
              }
            />
          </div>
        </section>
        <ContactSection data={contactImage} />
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
    contactImage: file(relativePath: { regex: "/contactBackground.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
          originalName
        }
      }
    }
    brands: allContentfulPostBrand {
      edges {
        node {
          titulo
          descripcion {
            descripcion
          }
          imagen {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;
