import React from "react";
import Title from "./title"

const data = [{
  title: "El Salvador",
  distributors: [{
    name: "DIZNA",
    description: "ILU, Starbrantdt, Estrella Blanca"
  }, {
    name: "UDISA",
    description: "Terramonte, El Bárbaro"
  }, {
    name: "DISZASA",
    description: "Blanquita, Demonios, Productos Institucionales (PI)"
  }]
}, {
  title: "Honduras",
  distributors: [{
    name: "DIZNA Honduras",
    description: "Estrella Blanca, Terramonte, Starbrandt, Blanquita, Tita"
  }]
}, {
  title: "Guatemala",
  distributors: [{
    name: "Grupo Curtis",
    description: "Starbrandt"
  }]
}, {
  title: "Costa Rica",
  distributors: [{
    name: "Grupo Curtis",
    description: "Starbrandt"
  }]
}]

const Distributors = () => {
  return (
    <div className="container mx-auto py-8 lg:px-32">
      <Title text="NUESTROS DISTRIBUIDORES" />
      {data.map((country, i) => (
        <div key={i} className="pb-8">
          <Title text={country.title} />
          {country.distributors.map((element, idx) => (
            <div key={idx} className="py-2 my-6">
              <p className="text-blueBright pb-2">{element.name}</p>
              <p className="text-content">{element.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Distributors;