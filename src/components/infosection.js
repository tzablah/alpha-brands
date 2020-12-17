import React from "react";
import Title from "./title";
import Image from "./image";
import Nosotros from "../images/svg/nosotros.svg";
import Objetivo from "../images/svg/objetivo.svg";
import Donde from "../images/svg/donde.svg";
const InfoSection = ({ image, position, text, title, id }) => {
  return (
    <article className="my-9 md:my-12 lg:my-14 xl:my-20">
      <div
        className={`flex flex-col items-center sm:justify-around sm:w-aboutSectionSm lg:w-aboutSectionMd xl:w-aboutSection ${position === "right" ? "sm:flex-row" : "sm:flex-row-reverse"
          }`}
      >
        <div
          className={`sm:w-1/2 md:w-inputMd lg:w-infoSectionLg sm:flex sm:flex-wrap sm:flex-row sm:items-center ${position === "right"
              ? "xl:mr-brandMargin md:mr-3.5"
              : "md:ml-3.5 xl:ml-brandMargin"
            }`}
        >
          <div className="flex justify-center items-center md:justify-start sm:w-full">
            <h3 id={id} className="header text-black font-bold">{title}</h3>
          </div>
          <div className="flex justify-center items-center py-4 mb-7 sm:mb-12 md:mb-0">
            <h2 className="text-center md:text-left parragraph">
              {text}
            </h2>
          </div>
        </div>
        <div
          className={`mt-7 sm:mt:0 w-8/12 sm:w-8/12 md:w-inputMd lg:w-infoSectionLg xl:mb-24 flex justify-center ${position === "right"
              ? "sm:justify-end md:ml-3.5 xl:ml-brandMargin"
              : "sm:justify-start md:mr-3.5 xl:mr-brandMargin"
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
