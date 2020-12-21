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
      <h3 className='header font-bold'>NUESTROS DISTRIBUIDORES</h3>
      {data.map((country, i) => (
        <div key={i} className="mt-8">
          <p className="subheader">
            {country.title}
          </p>
          {country.distributors.map((element, idx) => (
            <div key={idx} className="mt-3 mb-2">
              <a href="/" className="anchor-text">
                {element.name}
              </a>
              <p className="secondary-text mb-9">{element.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Distributors;
