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
    <div className="container mx-auto py-8 lg:mx-16 xl:mx-48">
      <Title text="NUESTROS DISTRIBUIDORES" />
      {data.map((country, i) => (
        <div key={i}>
          <Title text={country.title} className="pt-8" />
          {country.distributors.map((element, idx) => (
            <div key={idx} className="py-2 my-8">
              <p className="text-blue2 pb-2">{element.name}</p>
              <p>{element.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Distributors;