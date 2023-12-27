
import Navber from './Components/Navber'
import Card from './Components/Card'
import BlogCart from './Components/BlogCart'
import Timer from './Components/Timer'
import Blogs from '../public/blogs.json'
import { useEffect, useState } from 'react'

const App = () => {


  const [Data, setData] = useState([])
  const [selectedTitle, setSelectedTitle] = useState([]); // State for selected title
  const [bookTime, setbookTime] =useState(0)

  useEffect(() => {
    
    setData(Blogs)
    //console.log(Data)
    
    return () => {
      setData([])
    } 
    
    // eslint-disable-next-line react-hooks/exhaustive-deps  
  
  }, [])
  
const BookFun =(id)=>{
   
   const updateProduct =Data.find(d => d.id === id)
   if(updateProduct){
    if(!selectedTitle.find(d=> d.id === id)){
      setSelectedTitle([...selectedTitle, updateProduct])
    }
      else alert('Exists')
   } 
}
  
const timehandeler =(time)=> {
  setbookTime(bookTime + time)
}




  return (
    <>
      <div className='flex justify-center'>
       <Navber/>
      </div>
      <div className='w-full px-11 sm:px-16 lg:px-32 flex justify-center items-center'>
      <div className='grid md:grid-cols-3 grid-cols-1'> 
          <div className=' col-span-2 px-1'>
              
              {
                Data.map((D)=>(
                  <Card 
                  key={D.id}
                  D={D}
                  BookFun={BookFun}
                  timehandeler={timehandeler}
                  //  isBookmark={D.isBookmark}
                   />
                ))
              }
          </div>
          <div className='pt-10 ml-6'>
  

            <Timer
            bookTime={bookTime}
            />


            
            <BlogCart 
            selectedTitle={selectedTitle}
            // Head={Head}
            
         
            />
          </div>


      </div>
      </div>
    </>
  )
}

export default App