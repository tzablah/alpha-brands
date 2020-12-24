import React from "react";
import Title from "./title";
import Image from "./image";
import Nosotros from "../images/svg/nosotros.svg";
import Objetivo from "../images/svg/objetivo.svg";
import Donde from "../images/svg/donde.svg";
const InfoSection = ({ image, position, text, title, id }) => {
  return (
    <article className="xl:my-20 sm:my-12 md:my-14 mb-20">
      <div
        className={`flex flex-col items-center sm:justify-around sm:w-aboutSectionSm md:w-aboutSectionM lg:w-aboutSectionMd xl:w-aboutSection ${
          position === "right" ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div
          className={`md:w-inputMd xl:w-infosectionXl lg:w-infoSectionLg sm:flex sm:flex-wrap sm:flex-row sm:items-center ${
            position === "right"
              ? "xl:mr-brandMargin md:mr-5"
              : "md:ml-5 xl:ml-brandMargin"
          }`}
        >
          <div className="flex justify-center items-center md:justify-start sm:w-full">
            <h3 id={id} className="header text-black font-bold">
              {title}
            </h3>
          </div>
          <div className="flex justify-center items-center pt-1  md:py-4 mb-7 sm:mb-12 md:mb-0">
            <h2 className="text-center md:text-left parragraph">{text}</h2>
          </div>
        </div>
        <div
          className={`md:w-inputMd lg:w-infoSectionLg flex justify-center ${
            position === "right"
              ? "sm:justify-end xl:ml-brandMargin"
              : "sm:justify-start xl:mr-brandMargin"
          }`}
        >
          <div className="">
            {image === "nosotros.svg" ? (
              <Nosotros className="circle" />
            ) : image === "objetivo.svg" ? (
              <Objetivo className="circle" />
            ) : image === "donde.svg" ? (
              <Donde className="circle" />
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
};

export default InfoSection;
