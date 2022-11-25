import React from 'react'
import Button from '../button'

const MoneySection = ({ onClickToTop }) => {
  return (
    <div className='myContainer'>
      <div className='bg_money flex items-center flex-wrap justify-between p-10 text-white rounded-3xl gap-10 lg:gap-0'>
        <div>
          <img src="/img/money.png" alt="" width={250} />
        </div>
        <div className='w-full lg:max-w-[40%] text-xl leading-8'>We don’t wait for action, we create action. Time is priceless, and we do our best to provide you with fast and sustainable connection with the most respected lenders in the industry.</div>
        <div>
          <Button text="get started" onClick={onClickToTop} />
        </div>
      </div>
    </div>
  )
}

export default MoneySection