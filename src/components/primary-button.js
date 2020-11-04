import React from 'react'
import PropTypes from "prop-types";

const PrimaryButton = (children) => (
    <button className='bg-#F49725 text-white flex-row p-8px items-center'>{children}
    </button>
)

PrimaryButton.propTypes = {
    children: PropTypes.node.isRequired
  };

export default PrimaryButton