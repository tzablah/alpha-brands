import React from "react";

const Title = ({ text, className, id }) => {
  return (
    <p id={id}
      className={`text-2xl sm:text-3xl font-bold text-title leading-9 tracking-widest ${className}`}>
      {text}
    </p>
  );
};

export default Title;