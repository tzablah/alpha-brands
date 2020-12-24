import React from "react";

const data = [
  {
    title: "El Salvador",
    distributors: [
      {
        name: "DISNA",
        description: "Starbrandt, Estrella Blanca",
        link: "https://disna.com.sv/",
      },
      {
        name: "UDISA",
        description: "Terramonte, El Bárbaro",
        link: "https://www.udisa.com.sv/",
      },
      {
        name: "DISZASA",
        description: "Blanquita, Demonios, Productos Institucionales (PI)",
        link: "http://www.diszasa.com/",
      },
    ],
  },
  {
    title: "Honduras",
    distributors: [
      {
        name: "DISNA Honduras",
        description: "Estrella Blanca, Terramonte, Starbrandt, Blanquita, Tita",
        link: "https://www.facebook.com/DisnaHN/",
      },
    ],
  },
  {
    title: "Guatemala",
    distributors: [
      {
        name: "Grupo Curtis",
        description: "Starbrandt",
        link: "http://www.grupocurtis.com/",
      },
    ],
  },
  {
    title: "Costa Rica",
    distributors: [
      {
        name: "Grupo Curtis",
        description: "Starbrandt",
        link: "http://www.grupocurtis.com/",
      },
    ],
  },
];

const Distributors = () => {
  return (
    <div className="container mx-auto pt-8 lg:px-32">
      <h3 className="header font-bold text-black">NUESTROS DISTRIBUIDORES</h3>
      {data.map((country, i) => (
        <div key={i} className="mt-8">
          <p className="subheader">{country.title}</p>
          {country.distributors.map((element, idx) => (
            <div key={idx} className="mt-3 mb-2">
              <a href={element.link} className="anchor-text" target="_blank">
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
