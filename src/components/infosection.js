import React from "react";
import Image from "./image"
import Title from "./title";

const InfoSection = ({ image, position, text, title, id }) => {
  return (
    <article className="my-3 sm:my-24">
      <div className={`flex flex-col items-center sm:justify-around w-full lg:w-aboutSectionMd xl:w-aboutSection ${position === "right" ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
        <div className={`sm:w-1/2 sm:flex sm:flex-wrap sm:flex-row sm:items-center ${position === "right" ? "xl:mr-brandMargin md:mr-4" : "md:ml-4 xl:ml-brandMargin"}`}>
          <div className="flex justify-center items-center sm:justify-start sm:w-full">
            <Title text={title} id={id} />
          </div>
          <div className="flex justify-center items-center py-4">
            <h2 className="text-center sm:text-left text-xl">{text}</h2>
          </div>
        </div>
        <div className={`w-1/2 flex justify-center ${position === "right" ? "sm:justify-end md:ml-4 xl:ml-brandMargin" : "sm:justify-start md:mr-4 xl:mr-brandMargin"}`}>
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
