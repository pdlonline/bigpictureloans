import React from 'react'

const Button = ({text}) => {
  return (
    <button className='butPink bg-pink w-[150px] lg:w-[250px]'>
      {text}
    </button>
  )
}

export default Button