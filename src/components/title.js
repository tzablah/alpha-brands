import React from "react";

const Title = ({ text, id, sans, className }) => {
  return (
    <h3 id={id}
      className={`${sans ? 'font-opensans text-xl' : 'font-poppins text-2xl'} md:text-brandmd lg:text-3xl font-bold leading-9 tracking-widest text-black ${className}`}>
      {text}
    </h3>
  );
};

export default Title;