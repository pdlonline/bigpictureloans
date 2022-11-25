import React from 'react'

const StepItem = ({num, title, content, styles}) => {
  return (
    <div className={`myShadow max-w-[350px] rounded-xl bg-white p-10 relative overflow-hidden h-fit ${styles}`}>
      <div className='flex flex-col gap-3'>
        <div className='text-3xl font-bold bg-gradient-to-b from-pink-light to-pink p-6 w-[6.25rem] h-[6.25rem] rounded-b-[2.5rem] text-white absolute -top-3 -left-6 flex items-end justify-end '>{num}</div>
        <div className='text-xl font-bold ml-16'>{title}</div>
        <div className='text-blue-xxDark'>{content}</div>
      </div>
      <div className='absolute w-[70%] h-[2px] bg-pink bottom-0' />
    </div>
  )
}

export default StepItem