import { useEffect, useState } from "react"


const App = () => {


  const [Data, setData] = useState([])


useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {const firstTenItems = json.slice(0, 90);
        setData(firstTenItems);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })

}, [])




const handleToggle = (id) => {
  // Find the clicked to-do item and toggle its completed status
  const updatedTodos = Data.map((Dm) => {
    if (Dm.id === id) {
      return ({ ...Dm, completed: !Dm.completed });
    }
    return Dm;
    
  })
setData(updatedTodos)
};






  return (
    <div className=" ">

      <h1 className="text-center text-2xl font-bold">Todu aPP</h1>
   
     <div className="
     
     w-full grid lg:grid-cols-5 md:grid-cols-4  sm:grid-cols-3 grid-cols-2  gap-3
     ">
     {
      Data.map((D)=>{
        return(
          <div className=" md:w-48 w-36 m-3  p-3  shadow-lg shadow-cyan-500/50 rounded-lg" key={D.id}>
        <h1 className="pb-4 mt-1 md:text-lg text-center font-bold">Thinks to Do</h1>
       <div className="flex m-2">
      
        
       </div>
       <div className="flex m-2">
       <input 
       disabled
       className="mr-2 h-5"
       type="checkbox" />
        <p className="line-clamp-2 text-xs">Title:{D.title}</p>
        
       </div>
       <div className="flex m-2">
       <input 
       className="mr-2 h-5 text-xs"
       type="checkbox"
       onChange={() => handleToggle(D.id)}
       checked={D.completed}
        />
     
        <p 
        style={{ textDecoration: D.completed ? 'line-through' : 'none' }}
        >complet:{D.completed.toString()}</p>
        
       </div>
      </div>
        )
      })
     }
     </div>
    </div>
  )
}

export default App;