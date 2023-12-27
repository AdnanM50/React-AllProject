import React from 'react'
import Ellipse from '../assets/img/Ellipse .png'

const Navber = () => {
  return (
    <>
      <div className='w-[75%] flex justify-between items-center pt-4  border-b-2 py-2'>
      <div className=' font-bold md:text-[30px] text-[25]'>Knowledge Cafe</div>
        <div>
            <img src={Ellipse} 

            alt="" />
        </div>
      </div>
    </>
  )
}

export default Navber
