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
    <section className="sm:mt-8 md:mt-10 xl:mt-24 flex justify-center bg-contact sm:px-4 pb-16 pt-12 md:py-20 xl:py-24 lg:h-contactSection relative contactBackground">
      {send ? (
        <BgContactSend className="absolute hidden lg:block mt-4" />
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
            <p className="secondary-text mt-3 mb-6">
              Gracias por tomar el tiempo de escribirnos.
              <br className="sm:hidden" /> {""}
              Te responderemos lo más pronto posible.
            </p>
          </>
        ) : (
            <>
              <h3 id="contacto" className="header text-black font-bold">
                CONTACTO
              </h3>
              <h4 className="secondary-text mt-1 mb-3 sm:mb-7 md:mb-6 md:mt-4">
                Si te interesa saber más de nuestras marcas y sus productos,
              <br className="hidden sm:block" />
                {""} ¡no dudes en contactarnos!
              </h4>
            </>
          )}
        <ul className="secondary-text flex justify-center items-center flex-col-reverse sm:flex-row lg:flex-row">
          <li className="flex items-center my-3 sm:my-0">
            <a
              href="tel:503-2528-8600"
              className="flex flex-col sm:flex-row justify-center items-center"
              title="Contacto Alpha Brands"
            >
              <PhoneImg className="mr-3" />
              <p>503-2528-8600</p>
            </a>
          </li>
          <li className="flex items-center my-3 sm:my-0 sm:ml-10">
            <a
              href="mailto:info@alphabrands.com"
              className="flex flex-col sm:flex-row justify-center items-center"
              title="Contacto Alpha Brands"
            >
              <MailImg className="mr-3" />
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
            className={`flex flex-col items-center mt-5 sm:mt-8 xl:mt-12 ${send && "hidden"
              }`}
          >
            <input type="hidden" name="form-name" value="contact" />

            <input
              className="z-20 input-size secondary-text my-2 xl:my-3 p-4"
              placeholder="Nombre"
              name="Nombre"
              onChange={handleInputs}
            />
            <input
              className="z-20 input-size secondary-text xl:h-input my-2 xl:my-3 p-4"
              placeholder="Correo electrónico"
              name="Correo electrónico"
              type="email"
              onChange={handleInputs}
            />
            <textarea
              className="z-20 textarea secondary-text mt-2 xl:mt-3 p-4"
              placeholder="Mensaje..."
              name="Mensaje"
              onChange={handleInputs}
            />
            <button
              type="submit"
              className={` z-20 mt-11 bg-bg-blueBright h-buttonBrandMobile w-64 py-5 rounded-full text-white tracking-widest font-semibold bg-blueBright hover:bg-blue
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
