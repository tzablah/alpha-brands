import React, { useState } from "react";
import Title from "./title";
import PhoneImg from "../images/svg/phone.svg";
import MailImg from "../images/svg/mail.svg";
import BgContact from "../images/svg/bg-contact.svg";
import BgContactSend from "../images/svg/bg-contact-send.svg";

const ContactSection = () => {
  const [form, setForm] = useState({});
  const [send, setSend] = useState(false);
  const valid = Object.values(form).length === 3;
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const handleInputs = (e) => {
    e.persist();
    setForm((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formName = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": formName.getAttribute("name"), ...form }),
    })
      .then(() => setSend(true))
      .catch((error) => alert(error));
  };
  return (
    <section className="mt-10 xl:mt-24 flex justify-center bg-contact px-4 py-20 xl:py-24 lg:h-contactSection relative contactBackground">
      {send ? (
        <BgContactSend className="absolute hidden lg:block" />
      ) : (
          <BgContact className="absolute xl:ml-8 xl:w-full hidden lg:block" />
        )}
      <div
        className={`${send && "sm:py-56 lg:py-60"
          } lg:container xl:max-w-contactSection xl:h-full mx-auto text-center`}
      >
        {send ? (
          <>
            <h3 id="contacto" className="send text-black">
              ¡Gracias por tu mensaje!
            </h3>
            <p className="font-opensans text-base md:text-sm lg:text-base mt-3 mb-6">
              Gracias por tomar el tiempo de escribirnos. Te responderemos lo más
              pronto posible.
            </p>
          </>
        ) : (
            <>
              <h3 id="contacto" className="header text-black font-bold">
                CONTACTO
              </h3>
              <h4 className="text-sm xl:text-base mt-1 mb-7 sm:mb-12 md:mb-6 md:mt-4">
                Si te interesa saber más de nuestras marcas y sus productos,
              <br className="hidden sm:block" />
              ¡no dudes en contactarnos!
              </h4>
            </>
          )}
        <ul className="font-opensans text-sm md:text-sm xl:text-base flex justify-center items-center flex-col-reverse sm:flex-row lg:flex-row">
          <li className="flex items-center my-2 sm:my-0">
            <a
              href="tel:5586824354"
              className="flex flex-col sm:flex-row justify-center items-center"
              title="Contacto Alpha Brands"
            >
              <PhoneImg className="mr-3 mb-2" />
              <p>123-456-7890</p>
            </a>
          </li>
          <li className="flex items-center my-2 sm:my-0 sm:ml-10">
            <a
              href="mailto:info@alphabrands.com"
              className="flex flex-col sm:flex-row justify-center items-center"
              title="Contacto Alpha Brands"
            >
              <MailImg className="mr-3 mb-2" />
              <p>info@alphabrands.com</p>{" "}
            </a>
          </li>
        </ul>
        <form
          action="" //{() => setSend(true)}
          name="contact"
          method="post"
          data-netlify-honeypot="bot-field"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <div
            className={`flex flex-col items-center mt-8 xl:mt-12 ${send && "hidden"
              }`}
          >
            <input type="hidden" name="form-name" value="contact" />

            <input
              className="z-20 w-inputSm h-inputSm md:w-inputMd lg:h-inputMd  xl:w-inputLg xl:h-input placeholder-input my-2 xl:my-3 p-4"
              placeholder="Nombre"
              name="Nombre"
              onChange={handleInputs}
            />
            <input
              className="z-20 w-inputSm h-inputSm md:w-inputMd lg:h-inputMd xl:w-inputLg placeholder-input xl:h-input my-2 xl:my-3 p-4"
              placeholder="Correo electrónico"
              name="Correo electrónico"
              type="email"
              onChange={handleInputs}
            />
            <textarea
              className="z-20 w-inputSm h-textAreaSm md:w-inputMd md:h-textAreaMd xl:w-inputLg lg:h-36 xl:h-32  placeholder-input mt-2 xl:mt-3 p-4"
              placeholder="Mensaje..."
              name="Mensaje"
              onChange={handleInputs}
            />
            <button
              type="submit"
              className={` z-20 mt-11 bg-bg-blueBright w-64 py-5 rounded-full text-white tracking-widest font-semibold bg-blueBright hover:bg-blue
              ${!valid && "opacity-50 cursor-not-allowed"}`}
              disabled={!valid}
            >
              MANDAR MENSAJE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
