import React, { useEffect, useState } from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
const AccordionItem = ({ id, title, content }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (id <= 3) {
      setShow(true)
    }
  }, [id])
  return (
    <div className='myShadow px-10 py-6 bg-white rounded-lg w-full lg:w-[60%] mx-auto mt-10 relative '
      onClick={() => setShow(!show)}
    >
      <div className='absolute w-[86%] opacity-30 h-[2px] bg-pink top-0'
      />
      <div className={`flex gap-6 items-center transition-all duration-500`}>
        <div className='cursor-pointer'>
          <BsPlusCircleFill
            size={25}
            color="#ff0080"
          />
        </div>
        <div className=' gap-3 flex-col leading-8'>
          <div className='text-xl font-semibold cursor-pointer'>{title}</div>
          <div className={`${show ? "max-h-[600px] mt-3" : "max-h-0"} overflow-hidden transition-all duration-500`}>
            {content === "table" ? (
              <table className="table-auto w-full max-w-[400px] text-center border-border border">
                <thead>
                  <tr>
                    <th className='border border-border' >Minimum</th>
                    <th className='border border-border' >Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border border-border'>65 days</td>
                    <td className='border border-border'>84 months</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div>
                {content}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='absolute w-[86%] opacity-30 h-[2px] bg-pink bottom-0' />
    </div>
  )
}

export default AccordionItem