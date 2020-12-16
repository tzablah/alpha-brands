import React from "react";
import DownIcon from "../images/svg/download-icon.svg";
const PrimaryButton = ({
  title,
  icon,
  submit,
  className,
  id,
  onClick = () => { },
}) => (
    <button
      type={submit}
      id={id && id}
      className={`${className} bg-orangeLight hover:bg-orange ${icon
          ? "flex justify-center lg:justify-between lg:w-40"
          : "justify-center py-5"
        }`}
      onClick={() => onClick()}
    >
      <p
        className={`font-poppins ${icon ? "text-catalog tracking-catalog" : "text-base tracking-download"
          } font-semibold text-white`}
      >
        {title}
      </p>
      <figure className={`${icon ? "block ml-3" : "hidden"}`}>
        <DownIcon />
      </figure>
    </button>
  );

export default PrimaryButton;
