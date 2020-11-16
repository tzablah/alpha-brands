import React from "react";

const Title = ({ text, className, id }) => {
  return (
    <h3 id={id}
      className={`text-title font-bold text-brand leading-9 tracking-widest ${className}`}>
      {text}
    </h3>
  );
};

export default Title;