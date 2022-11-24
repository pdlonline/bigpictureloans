import React from 'react'
import StepItem from '../card/stepItem'

const StepSection = () => {
  return (
    <div className='myContainer !my-10'>
      <div className='flex justify-between'>
        <StepItem
          num={"01"}
          title="Submit A Request"
          content="All paperwork is gone! The whole process is completely online. Just fill in a few details about yourself and hit “Get Started”!"
        />
        <div className=' relative '>
          <div className='absolute -top-10 -right-24 w-fit h-fit '>
            <img src="/img/icons/arrow.svg" alt="" />
          </div>
          <StepItem
            styles={'mt-10'}
            num={"02"}
            title="Check The Offers"
            content="If the offer suits your needs and desires, and you agree with all the terms — simply e-sign the deal and get ready to enjoy the money!"
          />
           <div className='absolute -bottom-10 rotate-180 -left-24 w-fit h-fit '>
            <img src="/img/icons/arrow.svg" alt="" />
          </div>
        </div>
        <StepItem
          styles={"mt-20"}
          num={"03"}
          title="Receive Your Money"
          content="Once you submit your request, get your offer, and e-sign it, you’ll be able to get the funds to your bank account in no time!"
        />
      </div>
    </div>
  )
}

export default StepSection