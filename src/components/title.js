import React from "react";

const Title = ({ text, className, id }) => {
  return (
    <p id={id}
      className={`text-title font-bold text-brand leading-9 tracking-widest ${className}`}>
      {text}
    </p>
  );
};

export default Title;