import React, { useState } from "react"



function App() {

  const [color, setcolor] = useState("olive")

  return (

    <>

      <div className=" w-full h-screen duration-500" style={{backgroundColor:color}}>
        <div className=" fixed  bottom-12 flex flex-wrap justify-center  inset-x-0 px-2">
          <div className="flex flex-wrap justify-between gap-3 shadow-xl bg-transparent px-3 py-2 rounded-3xl">

            <button onClick={()=>{setcolor("red")}} style={{backgroundColor:"red"}} className=" text-white px-4 py-1  rounded-md">Red</button>
            <button onClick={()=>{setcolor("pink")}} className="px-4 py-1 rounded-lg text-white" style={{backgroundColor:"pink"}} >Pink</button>
            <button onClick={()=>{setcolor("yellow")}} className="px-4 py-1 rounded-lg text-white" style={{backgroundColor:"yellow"}}>Yellow</button>
            <button onClick={()=>{setcolor("blue")}} className="px-4 py-1 rounded-lg text-white" style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=>{setcolor("olive")}} className="px-4 py-1 rounded-lg text-white"  style={{backgroundColor:"olive"}}>Olive</button>
            <button onClick={()=>{setcolor("green")}} className="px-4 py-1 rounded-lg text-white"  style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=>{setcolor("black")}} className="px-4 py-1 rounded-lg text-white"  style={{backgroundColor:"black"}}>Black</button>
            <button onClick={()=>{setcolor("white")}} className="px-4 py-1 rounded-lg text-black"  style={{backgroundColor:"white"}}>white</button>




          </div>
        </div>
      </div>

    </>
  )
}

export default App
