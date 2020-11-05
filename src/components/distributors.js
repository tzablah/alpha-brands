import React from "react";
import Title from "./title"

const data = [{
  title: "El Salvador",
  distributors: [{
    name: "DISNA",
    description: "Terra"
  }, {
    name: "DISNA",
    description: "Terra"
  }, {
    name: "DISNA",
    description: "Terra"
  }, {
    name: "DISNA",
    description: "Terra"
  }]
}, {
  title: "El Salvador",
  distributors: [{
    name: "DISNA",
    description: "Terra"
  }, {
    name: "DISNA",
    description: "Terra"
  }, {
    name: "DISNA",
    description: "Terra"
  }, {
    name: "DISNA",
    description: "Terra"
  }]
}, {
  title: "El Salvador",
  distributors: [{
    name: "DISNA",
    description: "Terra"
  }, {
    name: "DISNA",
    description: "Terra"
  }, {
    name: "DISNA",
    description: "Terra"
  }, {
    name: "DISNA",
    description: "Terra"
  }]
}, {
  title: "El Salvador",
  distributors: [{
    name: "DISNA",
    description: "Terra"
  }, {
    name: "DISNA",
    description: "Terra"
  }, {
    name: "DISNA",
    description: "Terra"
  }, {
    name: "DISNA",
    description: "Terra"
  }]
}]

const Distributors = () => {
  return (
    <div className="lg:mx-48 mt-4">
      <Title text="NUESTROS DISTRIBUIDORES" />
      {data.map((country, i) => (
        <div key={i}>
          <Title text={country.title} className="pt-10" />
          {country.distributors.map((element, idx) => (
            <div key={idx} className="py-2">
              <p className="text-blue2">{element.name}</p>
              <p>{element.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Distributors;