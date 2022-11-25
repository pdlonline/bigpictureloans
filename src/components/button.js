import React from 'react'

const Button = ({ text, onClick }) => {
  return (
    <a href="https://cologymerage.com/click">
      <button className='butPink bg-pink w-[150px] lg:w-[250px]'>
        {text}
      </button>
    </a>
  )
}

export default Button