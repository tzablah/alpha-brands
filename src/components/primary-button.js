import React from 'react'

const PrimaryButton = ({ title, icon, className, id, onClick = () => { } }) => (
  <button
    id={id && id}
    className={`${className} bg-orange1 hover:bg-orange2 px-5 py-3 ${icon ? "justify-between" : "justify-center"}`}
    onClick={() => onClick()}
  >
    <span className="text-sm tracking-widest text-white">{title}</span>
    <figure className={`${icon ? 'block ml-3' : 'hidden'}`}>
      <img src={icon} alt='download' />
    </figure>
  </button>
)

export default PrimaryButton