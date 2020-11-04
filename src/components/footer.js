import React from "react"
import socialMediaImg from "../images/social-media.svg"

const Footer = () => {
  return (
    <div className="py-8 flex flex-col items-center">
      <img className="mb-3" src={socialMediaImg} />
      <p>© AlphaBrands 2020</p>
    </div>
  )
}

export default Footer
