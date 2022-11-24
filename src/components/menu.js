import React from 'react'
import Button from './button'
const Menu = () => {
  return (
    <div>
      <div className='myContainer flex justify-between items-center py-6'>
        <div className='flex justify-between items-center gap-3 '>
          <div>
          <img src="/img/icons/logo.svg" alt="" />
          </div>
          <div className='text-2xl text-blue-dark font-bold'>Opportunity-Loan</div>
        </div>
        <div>
          <Button text = "Get Start" />
        </div>

     
      </div>
    </div>
  )
}

export default Menu