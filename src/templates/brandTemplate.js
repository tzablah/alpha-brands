import React from "react";
import { graphql } from "gatsby";

const PostBrand = () => {
  return (
    <div>
      <p>hola</p>
    </div>
  );
};

export default PostBrand;
export const pageQuery = graphql`
  query {
    allContentfulAlphaBrands {
      edges {
        node {
          title
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
