

const BlogCart = ({Bvalue,selectedTitle}) => {

  return (
    <>
         <div className='md:w-[85%] w-full bg-gray-200 p-5 mx-4 '>
                <h1 className=' font-bold pb-4'>Bookmarked Blogs : {selectedTitle.length}</h1>
                {/* <div><h2>{s.title}</h2></div> */}
                {
                  selectedTitle.map(s=><div className=" bg-white w-full p-2 mb-3 rounded"><h2 className=" font-semibold">{s.title}</h2></div> )
                }
                
        </div>
    </>
  )
}

export default BlogCart




// <div className=' bg-white w-full p-2 mb-3 rounded'>
//  <h2 className=' font-semibold'>{Head}</h2> 
// <h2 className=' font-semibold'>{selectedTitle}</h2>
//  </div> 