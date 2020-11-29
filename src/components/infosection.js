import React from "react";
import Title from "./title";

const InfoSection = ({ image, position, text, title, id }) => {
  return (
    <article className="my-3 sm:my-24">
      <div className={`flex flex-col items-center sm:justify-around w-full xl:w-aboutSection ${position === "right" ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
        <div className={`sm:w-1/2 sm:flex sm:flex-wrap sm:flex-row sm:items-center ${position === "right" ? "md:mr-8" : "md:ml-8"}`}>
          <div className="flex justify-center items-center sm:justify-start sm:w-full">
            <Title text={title} id={id} />
          </div>
          <div className="flex justify-center items-center py-4">
            <h2 className="font-opensans text-center sm:text-left lg:text-xl">{text}</h2>
          </div>
        </div>
        <div className={`w-1/2 flex justify-center ${position === "right" ? "sm:justify-end" : "sm:justify-start"}`}>
          {image}
        </div>
      </div>
    </article>
  );
};

export default InfoSection;
