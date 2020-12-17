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
        className={`flex flex-col items-center sm:justify-around w-full lg:w-aboutSectionMd xl:w-aboutSection ${
          position === "right" ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div
          className={`md:w-1/2  sm:flex sm:flex-wrap sm:flex-row sm:items-center ${
            position === "right"
              ? "xl:mr-brandMargin md:mr-4"
              : "md:ml-4 xl:ml-brandMargin"
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
          className={`w-8/12 sm:w-8/12 flex justify-center ${
            position === "right"
              ? "sm:justify-end md:ml-4 xl:ml-brandMargin"
              : "sm:justify-start md:mr-4 xl:mr-brandMargin"
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
