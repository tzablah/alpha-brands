import React from "react";
import CloseImg from "../images/svg/close.svg";

const Modal = ({ children, show, onClick, width, alignment }) => {
  return (
    <div
      className={`z-50 w-screen h-screen fixed top-0 left-0 bg-content flex items-center ${
        !show && "hidden"
      } ${alignment ? alignment : "justify-center md:py-24"}`}
    >
      <div
        className={`bg-white p-6 md:p-10 h-full ${
          width ? `${width}` : "w-full m-auto"
        } md:w-modalMd  overflow-y-scroll`}
      >
        <div className="flex justify-end">
          <button
            className="fixed 
             rounded-full flex items-center 
             justify-center
              w-8 h-8
               active:bg-lightBlue
               "
            onClick={() => onClick()}
          >
            <CloseImg className=" w-4 h-4" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
