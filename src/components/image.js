import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = (props) => {
  const { filename, alt, className } = props;
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: { absolutePath: { regex: "/images/assets/" } }
          ) {
            edges {
              node {
                relativePath
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const image = data.images.edges.find((image) => {
          return image.node.relativePath.includes(filename);
        });
        if (!image)
          return (
            <svg
              className="w-6 h-6 block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          );
        return (
          <Img
            className={className}
            fluid={image.node.childImageSharp.fluid}
            title={alt}
            alt={alt}
          />
        );
      }}
    />
  );
};

export default Image;
