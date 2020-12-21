import React from "react";

const data = [
  {
    title: "El Salvador",
    distributors: [
      {
        name: "DIZNA",
        description: "ILU, Starbrantdt, Estrella Blanca",
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
        name: "DIZNA Honduras",
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
    <div className="container mx-auto py-8 lg:px-32">
      <h3 className="text-2xl md:text-3xl lg:text-brandlg font-bold leading-9 tracking-widest text-black`">
        NUESTROS DISTRIBUIDORES
      </h3>
      {data.map((country, i) => (
        <div key={i} className="mt-8">
          <p className="font-opensans font-bold text-xl md:text-2xl text-black">
            {country.title}
          </p>
          {country.distributors.map((element, idx) => (
            <div key={idx} className="mt-1.5 mb-2">
              <a
                href={element.link}
                className="text-blueBright hover:text-blue pb-2 text-sm"
              >
                {element.name}
              </a>
              <p className="text-content text-sm">{element.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Distributors;
