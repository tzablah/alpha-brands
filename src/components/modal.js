import React from "react";
import closeImg from "../images/close.svg"

const Modal = ({ children, show, onClick, width, alignment }) => {

  return (
    <div className={`z-50 w-screen h-screen fixed top-0 left-0 bg-content flex items-center ${!show && "hidden"} ${alignment ? alignment : "justify-center md:py-24"}`}>
      <div className={`bg-white p-6 md:p-10 h-full md:h-auto ${width ? `${width}` : "w-full m-auto"} md:w-3/4 overflow-y-scroll`}>
        <div className="flex justify-end">
          <button className="fixed" onClick={() => onClick()}>
            <img src={closeImg} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal;