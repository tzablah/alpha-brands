import React from "react";

const data = [
  {
    title: "El Salvador",
    distributors: [
      {
        name: "DIZNA",
        description: "ILU, Starbrantdt, Estrella Blanca",
      },
      {
        name: "UDISA",
        description: "Terramonte, El Bárbaro",
      },
      {
        name: "DISZASA",
        description: "Blanquita, Demonios, Productos Institucionales (PI)",
      },
    ],
  },
  {
    title: "Honduras",
    distributors: [
      {
        name: "DIZNA Honduras",
        description: "Estrella Blanca, Terramonte, Starbrandt, Blanquita, Tita",
      },
    ],
  },
  {
    title: "Guatemala",
    distributors: [
      {
        name: "Grupo Curtis",
        description: "Starbrandt",
      },
    ],
  },
  {
    title: "Costa Rica",
    distributors: [
      {
        name: "Grupo Curtis",
        description: "Starbrandt",
      },
    ],
  },
];

const Distributors = () => {
  return (
    <div className="container mx-auto py-8 lg:px-32">
      <h3 className="text-brandmd lg:text-distributors font-bold leading-9 tracking-title text-black font-poppins">NUESTROS DISTRIBUIDORES</h3>
      {data.map((country, i) => (
        <div key={i} className="pt-8 md:pt-12">
          <p className="font-opensans font-bold text-xl md:text-2xl lg:text-distributors text-black">
            {country.title}
          </p>
          {country.distributors.map((element, idx) => (
            <div key={idx} className="mt-1.5 mb-2">
              <a href="/" className="text-blueBright text-sm hover:text-blue pb-2">
                {element.name}
              </a>
              <p className="text-content">{element.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Distributors;
