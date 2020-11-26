import React, { useState } from "react";
import Title from "./title";
import PhoneImg from "../images/svg/phone.svg";
import MailImg from "../images/svg/mail.svg";

const ContactSection = ({ data }) => {
  const [form, setForm] = useState({});
  const [send, setSend] = useState(false);
  const valid = Object.values(form).length === 3;
  console.log(data, 'contactSection');

  const handleInputs = (e) => {
    e.persist();
    setForm((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <section
      className={`px-4 ${send ? "sm:py-56 lg:py-64 bg-contacBackground-send" : "xl:h-contactSection bg-contacBackground"}`}
    >
      <div className={`lg:container xl:max-w-contactSection xl:h-full mx-auto py-16 text-center`}>
        <Title
          text={send ? "¡Gracias por tu mensaje!" : "CONTACTO"}
          id="contacto"
        />
        {send ? (
          <p className="text-base my-6">
            Gracias por tomar el tiempo de escribirnos. Te responderemos lo más
            pronto posible.
          </p>
        ) : (
            <h4 className="text-base my-6">
              Si te interesa saber más de nuestras marcas y sus productos,
              <br className="hidden sm:block" />
              ¡no dudes en contactarnos!
            </h4>
          )}
        <ul className="flex justify-center items-center flex-col md:flex-row">
          <li className="flex items-center my-2 sm:my-0">
            <a
              href="tel:5586824354"
              className="flex justify-center items-center"
              title="Contacto Alpha Brands"
            >
              <PhoneImg className="mr-3" />
              <p>123-456-7890</p>
            </a>
          </li>
          <li className="flex items-center my-2 sm:my-0 md:ml-10">
            <a
              href="mailto:info@alphabrands.com"
              className="flex justify-center items-center"
              title="Contacto Alpha Brands"
            >
              <MailImg className="mr-3" />
              <p>info@alphabrands.com</p>{" "}
            </a>
          </li>
        </ul>
        <div
          className={`flex flex-col items-center mt-6 sm:mt-12 ${send && "hidden"
            }`}
        >
          <input
            className="w-11/12 md:w-5/12 h-input placeholder-input my-3 p-4"
            placeholder="Nombre"
            name="Nombre"
            onChange={handleInputs}
          />
          <input
            className="w-11/12 md:w-5/12 h-input  placeholder-input my-3 p-4"
            placeholder="Correo electrónico"
            name="Correo electrónico"
            type="email"
            onChange={handleInputs}
          />
          <textarea
            className="w-11/12 md:w-5/12 h-48  placeholder-input my-3 p-4"
            placeholder="Mensaje..."
            name="Mensaje"
            onChange={handleInputs}
          />
          <button
            className={`md:flex w-72 mt-12 justify-center bg-blue2 py-5 rounded-full text-catalog font-semibold tracking-catalog text-white hover:bg-blue
              ${!valid && "opacity-50 cursor-not-allowed"}`}
            disabled={!valid}
            onClick={() => setSend(true)}
          >
            MANDAR MENSAJE
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
