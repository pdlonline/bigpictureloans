import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <button className='butPink bg-pink w-[150px] lg:w-[250px]' onClick={onClick}>
      {text}
    </button>
  )
}

export default Button