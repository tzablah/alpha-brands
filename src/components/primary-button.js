import React from "react";
import DownIcon from "../images/svg/download-icon.svg";
const PrimaryButton = ({
  title,
  icon,
  submit,
  className,
  id,
  onClick = () => {},
}) => (
  <button
    type={submit}
    id={id && id}
    className={`${className} bg-orange1 hover:bg-orange2 ${
      icon
        ? "flex justify-center lg:justify-between md:w-40"
        : "justify-center py-5"
    }`}
    onClick={() => onClick()}
  >
    <span className="text-catalog font-semibold tracking-catalog text-white">{title}</span>{" "}
    <figure className={`${icon ? "block ml-3" : "hidden"}`}>
      <DownIcon />
    </figure>
  </button>
);

export default PrimaryButton;
