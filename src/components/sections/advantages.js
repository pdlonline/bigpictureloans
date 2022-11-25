import React from 'react'
import Button from '../button'
import AdvantagesCard from '../card/advantagesCard'

const mockData = [
  {
    title: "Simple",
    content: "Our advanced automated system lets you request up to $5,000 by filling out a simple, clear-cut form directly from your computer, tablet, or mobile phone.",
    image: "/img/icons/protect.svg",
  },

  {
    title: "Affordable",
    content: "We don’t focus solely on your credit score. We focus on helping you and providing you with loan offers! So don’t let your credit determine your future and stop you from submitting a request with us!",
    image: "/img/icons/monitor.svg",
  },
  {
    title: "Fast",
    content: "The online form usually takes less than 10 minutes to complete. So before you even finish your cup of tea, you’ll already have your request submitted.",
    image: "/img/icons/thunder.svg",
  },
  {
    title: "Secure",
    content: "We do our best to keep your information absolutely safe and secure. Our service uses the latest technology and data security procedures to make sure that your personal information is protected.",
    image: "/img/icons/lock.svg",
  },
]
const AdvantagesSection = ({onClickToTop}) => {
  return (
    <div className='myContainer'>
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-10'>
        <div className='flex flex-col gap-8 items-center lg:items-start'>
          <div className='text-5xl font-bold relative'>
            <div className='line_blue'/>
            Advantages
            </div>
          <div className='text-blue-xxDark'>
            Just fill out our smart request form, get connected with a lender and enjoy your extra cash!
          </div>
          <Button text={"get started"} onClick ={onClickToTop}/>
        </div>
        <div>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 '>
            <div className={`space-y-8 mt-16`}>
              {mockData.slice(0, 2).map((item, key) => (
                <div key={key} >
                  <AdvantagesCard
                    title={item.title}
                    content={item.content}
                    image={item.image}
                  />
                </div>
              ))}
            </div>
            <div className={`space-y-8`}>
              {mockData.slice(2, 4).map((item, key) => (
                <div key={key} >
                  <AdvantagesCard
                    title={item.title}
                    content={item.content}
                    image={item.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvantagesSection