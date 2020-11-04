import React, { useState } from "react";
import phoneImg from "../images/phone.svg";
import mailImg from "../images/mail.svg";
import Title from "../components/title"

const ContactSection = () => {
  const [form, setForm] = useState({});
  const [send, setSend] = useState(false);
  const valid = Object.values(form).length === 3;

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
    <section className="bg-gray px-4 min-h-screen">
      <div className="container mx-auto py-16 text-center">
        <Title
          text={send ? "¡Gracias por tu mensaje!" : "CONTACTO"}
          className={send && "tracking-wider mt-40"}
        />
        {send ? (
          <p className="text-base my-6">
            Gracias por tomar el tiempo de escribirnos. Te responderemos lo más
            pronto posible.
          </p>
        ) : (
            <p className="text-base my-6">
              Si te interesa saber más de nuestras marcas y sus productos,
              <br className="hidden sm:block" />
            ¡no dudes en contactarnos!
            </p>
          )}
        <ul className="flex justify-center items-center flex-col md:flex-row">
          <li className="flex items-center my-2 sm:my-0">
            {/*             <img className="mr-3" src={phoneImg} />
             */}{" "}
            <p>123-456-7890</p>
          </li>
          <li className="flex items-center my-2 sm:my-0 md:ml-10">
            {/*             <img className="mr-3" src={mailImg} />
             */}{" "}
            <p>info@alphabrands.com</p>
          </li>
        </ul>
        <div
          className={`flex flex-col items-center mt-6 sm:mt-12 ${send && "hidden"
            }`}
        >
          <input
            className="w-11/12 md:w-3/5 lg:w-2/5 h-12 my-3 p-4"
            placeholder="Nombre"
            name="Nombre"
            onChange={handleInputs}
          />
          <input
            className="w-11/12 md:w-3/5 lg:w-2/5 h-12 my-3 p-4"
            placeholder="Correo electrónico"
            name="Correo electrónico"
            type="email"
            onChange={handleInputs}
          />
          <textarea
            className="w-11/12 md:w-3/5 lg:w-2/5 h-48 my-3 p-4"
            placeholder="Mensaje..."
            name="Mensaje"
            onChange={handleInputs}
          />
          <button
            className={`mt-6 sm:mt-12 bg-blue2 w-64 h-12 rounded-full text-white tracking-widest font-semibold ${!valid && "opacity-50 cursor-not-allowed"
              }`}
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
