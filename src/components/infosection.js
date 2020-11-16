import React from "react";
import Image from "./image"
import Title from "./title";

const InfoSection = ({ image, position, text, title, id }) => {
  return (
    <article className="my-16 sm:my-24 w-full">
      <div className={`flex flex-col items-center sm:justify-around w-full ${position === "right" ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
        <div className="sm:w-1/2 sm:flex sm:flex-wrap sm:flex-row sm:items-center">
          <div className="flex justify-center items-center sm:justify-start sm:w-full">
            <Title text={title} id={id} />
          </div>
          <div className="flex justify-center items-center py-4">
            <h2 className="text-center sm:text-left text-xl">{text}</h2>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="img-size">
            <Image
              className="rounded-full z-0"
              //fluid={image.childImageSharp.fluid}
              alt={`${title} Alpha Brands`}
              style={{ height: "100%", width: "100%" }}
              filename={image}
              imgStyle={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default InfoSection;
