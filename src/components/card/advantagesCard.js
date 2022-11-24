import React from 'react'


const AdvantagesCard = ({ title, content, image }) => {
  return (
    <div className='flex flex-col gap-3 p-10 w-full pt-[150px] bg-white drop-shadow-lg rounded-xl relative'>
      <div className='absolute left-0 top-0'>
        <img src={image} alt="" />
      </div>
      <div className='font-bold text-xl'>{title}</div>
      <div className='text-blue-xxDark text-sm leading-6'>
        {content}
      </div>
      <div className='absolute w-[70%] h-[2px] bg-pink bottom-0' />
    </div>
  )
}

export default AdvantagesCard