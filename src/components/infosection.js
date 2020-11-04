import React from "react";
import Img from "gatsby-image";
import Title from "./title";

const InfoSection = ({ image, position, text, title }) => {
  return (
    <>
      <article className="my-16 sm:my-24 sm:px-8">
        <div className={`flex flex-col items-center sm:justify-around ${position === "right" ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
          <div className="sm:w-1/2 sm:flex sm:flex-wrap sm:flex-row sm:justify-center sm:items-center">
            <div className="flex justify-center items-center  sm:justify-start sm:w-full sm:px-3">
              <Title text={title} />
            </div>
            <div className="flex justify-center items-center px-2 mb-4">
              <p className="p-2 text-center sm:text-left">{text}</p>
            </div>
          </div>
          <div className="img-size">
            <Img
              className="rounded-full"
              fluid={image.childImageSharp.fluid}
              alt={image.childImageSharp.fluid.originalName}
              style={{ height: "100%", width: "100%" }}
              imgStyle={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </article>
    </>
  );
};

export default InfoSection;
