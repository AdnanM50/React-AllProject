import Frame from '../assets/img/Frame.png'

import React,{useEffect} from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';


const Card = ({D,BookFun,timehandeler}) => {
  const {author_name,date,time,tags,author_image,cover_image,title} = D;


  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className=' mt-6 border-b-2 py-4'>
      <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className='w-full '>
        <img src={cover_image } alt="" />
      </div>
      <div className='w-full mt-4'>
        <div className='flex justify-between'>
            <div className='flex'>
                <img src={author_image} className='mx-2 w-10 h-10 rounded-full' alt="" />
                <div>
                <span className=' md:font-bold font-semibold'>{author_name}</span> <br/>
                <span className=' md:text-xs text-[9px] text-gray-500'>{date}</span>
                </div>
            </div>
            <div className='md:text-xs text-[9px] text-gray-500 flex'>
              <p className='flex'>{time} min read 
              </p>
              <button className='flex' onClick={()=>BookFun(D.id)}>
                <img className=' md:w-5 w-4 cursor-pointer'
                src={Frame} alt="" />
                </button>
            </div>
        </div>
        <div>
            <h1 className=' md:text-[30px] text-sm font-bold md:leading-[3rem]'>{title}</h1>
        </div>
        <div>
          <span className='text-xs text-gray-500 mx-2'>#{tags[0]}</span>
          <span className='text-xs text-gray-500 mx-2'>#{tags[1]}</span>
        </div>
        <div>
          <a onClick={()=> timehandeler(D.time)} className=' text-sm underline text-[#6047EC]' href="#">Mark as read</a>
        </div>
      </div>
    </div>
  )
}

export default Card
