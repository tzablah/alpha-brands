import React from 'react'


const PrimaryButton = ({title, icon, id}) => (
    <button id='' className={`${id ? 'flex btn w-4/5 justify-center flex-row items-center lg:mr-6' : 'btn hidden lg:flex flex-row items-center lg:mr-6 px-4 py-2'}`}>
        {title}
        <figure className={`${icon ? 'block ml-2' : 'hidden'}`}>
            <img src={icon} alt='download'/>
        </figure>
    </button>
    
)

export default PrimaryButton