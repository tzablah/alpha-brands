import React from "react";
import Title from "./title";
import Image from "./image";
import Nosotros from "../images/svg/nosotros.svg";
import Objetivo from "../images/svg/objetivo.svg";
import Donde from "../images/svg/donde.svg";
const InfoSection = ({ image, position, text, title, id }) => {
  console.log(image);
  return (
    <article className="my-12 sm:my-24">
      <div
        className={`flex flex-col items-center sm:justify-around w-full lg:w-aboutSectionMd xl:w-aboutSection ${
          position === "right" ? "sm:flex-row" : "sm:flex-row-reverse"
        }`}
      >
        <div
          className={`sm:w-1/2  sm:flex sm:flex-wrap sm:flex-row sm:items-center ${
            position === "right"
              ? "xl:mr-brandMargin md:mr-4"
              : "md:ml-4 xl:ml-brandMargin"
          }`}
        >
          <div className="flex justify-center items-center sm:justify-start sm:w-full">
            <Title text={title} id={id} />
          </div>
          <div className="flex justify-center items-center py-4">
            <h2 className="font-opensans text-center sm:text-left lg:text-xl">
              {text}
            </h2>
          </div>
        </div>
        <div
          className={`w-8/12 sm:w-8/12  flex justify-center ${
            position === "right"
              ? "sm:justify-end md:ml-4 xl:ml-brandMargin"
              : "sm:justify-start md:mr-4 xl:mr-brandMargin"
          }`}
        >
          <div className="img-size">
            {image === "nosotros.svg" ? (
              <Nosotros />
            ) : image === "objetivo.svg" ? (
              <Objetivo />
            ) : image === "donde.svg" ? (
              <Donde />
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
};

export default InfoSection;
