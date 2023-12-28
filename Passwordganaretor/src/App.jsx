import  { useCallback, useEffect } from "react"
import { useState } from "react"



function App() {

  const [length, setlength] = useState(8)
  const [charAllowed, setcharAllowed] = useState(false)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [Password, setPassword] = useState('')





  const passwordGanaretor = useCallback(
    () => {
      let pass=""
      let str=' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

      if(numberAllowed) str +='0123456789'
      if(charAllowed) str +='~`!@#$%^&*()_[]{}|?,.:;'

      for (let i = 1; i <= length; i++) {
        let chr=Math.floor(Math.random() * str.length+1)

        pass += str.charAt(chr)
      }
      
      setPassword(pass)

    },
    [length,charAllowed,numberAllowed,setPassword],
  )
  
    

      useEffect(()=>{
          passwordGanaretor()
      },[length,charAllowed,numberAllowed,passwordGanaretor])





      const copyfun=()=>{
        navigator.clipboard.writeText(Password)
      }

  return (
    <>
      <div className=" w-full h-screen bg-black flex justify-center items-center text-white">
        <div className=" w-[40%] h-[40vh] bg-gray-600 rounded-lg  border-4 border-white-500 text-center">
          <h1 className=" text-3xl text-orange-500">Test</h1>
          <div>
            <input
             readOnly
             type="text"
             value={Password}
             onChange={(e)=>setPassword(e.target.value)}
             placeholder="Password"
             className=" w-4/5 px-2 py-2 rounded-md my-6 text-black border-none"
             />
             <button onClick={copyfun}
             className=" bg-blue-500 py-2 px-4 rounded-md m-1 border-white border-2"
             >Copy</button>
          </div>
          <div className="flex gap-x-2 mx-3 text-orange-500">
              <input 
              type="range"
              max={100}
              min={6}
              value={length}
              onChange={(e) =>{setlength(e.target.value)}}
              />
              <label htmlFor="">length:{length}</label>
              <div className="flex gap-x-1">
                <input 
                type="checkbox"
                defaultChecked={numberAllowed}
                onChange={()=>{
                  setnumberAllowed((prev)=>!prev)
                }}
                />
                <label htmlFor="">NumberAllowed</label>
              </div>
              <div className="flex gap-x-1">
                <input 
                type="checkbox"
                defaultChecked={charAllowed}
                onChange={()=>{
                  setcharAllowed((prev)=>!prev)
                }}
                />
                <label htmlFor="">charAllowed</label>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
