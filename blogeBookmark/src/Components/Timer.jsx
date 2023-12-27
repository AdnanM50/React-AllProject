

const Timer = ({bookTime}) => {
  return (
    <>
        <div className='md:w-[85%] w-full h-12 flex justify-center items-center border border-[#6047EC] rounded bg-slate-950/[.06] mb-8 p-1 mx-4'>
              <p className='text-[#6047EC] font-bold'>Spent time on read : {bookTime} min</p>
            </div>
    </>
  )
}

export default Timer
