import React from "react";
import Img from "gatsby-image";
const InfoSection = ({ image, position, text, title }) => {
  return (
    <>
      <section className="w-full h-auto py-4 bg-white mb-12 mt-10">
        {position === "right" ? (
          <div className="sm:flex sm:pl-12">
            {/* div text and parragraph container */}
            <div className="sm:w-6/12  sm:flex sm:flex-wrap sm:flex-row sm:justify-center sm:items-center">
              <div className="flex justify-center items-center  sm:justify-start sm:w-full sm:px-3">
                <p className="font-bold leading-9 text-2xl text-title">{title}</p>
              </div>
              <div className="flex justify-center items-center px-2  mb-4">
                <article className="p-2">
                  <p className="font-normal text-base leading-normal">
                    {text}
                  </p>
                </article>
              </div>
            </div>

            {/* div image container  */}
            <div className="flex items-center justify-center w-full h-auto sm:w-6/12">
              <div className="h-56 w-56">
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
          </div>
        ) : (
            <div className="sm:flex flex-row-reverse sm:pr-8">
              {/* div text and parragraph container */}
              <div className="sm:w-6/12 sm:pl-8  sm:flex sm:flex-wrap sm:flex-row sm:justify-center sm:items-center">
                <div className="flex justify-center items-center  sm:justify-start sm:w-full sm:px-3">
                  <p className="font-bold leading-9 text-2xl text-title">{title}</p>
                </div>
                <div className="flex justify-center items-center px-2  mb-4">
                  <article className="p-2">
                    <p className="font-normal text-base leading-normal">
                      {text}
                    </p>
                  </article>
                </div>
              </div>
              {/* div image container  */}
              <div className=" sm:w-6/12 flex items-center justify-center w-full h-auto">
                <div className="h-56 w-56">
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
            </div>
          )}
      </section>
    </>
  );
};

export default InfoSection;
