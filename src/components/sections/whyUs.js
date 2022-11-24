import React from 'react'
import Button from '../button'

const WhyUs = () => {
  return (
    <div className='myContainer'>
      <div className='grid grid-cols-2 items-center gap-10'>
        <div className='relative'>
          <div className='w-[500px] flex  rounded-2xl overflow-hidden z-10'>
            <img src="/img/whyUs.jpeg" alt="" className='z-50' />
          </div>
          <div className='image_why_us' />
        </div>

        <div className='flex flex-col gap-8'>
          <div className='text-6xl'>Why Us</div>
          <div className='text-blue-xxDark'>
            We offer free and straightforward services without any hidden fees or charges on our part. And as we care about your comfort and safety, we enable you to submit a request without having to worry about any obligations or threats to your data security.
          </div>
          <Button text={"get started"} />
        </div>
      </div>
    </div>
  )
}

export default WhyUs