//import React from 'react'
import { useState } from "react";

//import { Link } from "react-router-dom";

import Header from "./Components/Header";


const App = () => {
  const [Task, setTask] = useState("");
  const [Desc, setDesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  
  //  console.log(mainTask)

  const SubmitHandeler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { Task, Desc }]);
    // localStorage.setItem('Task',Task)
    // localStorage.setItem('Desc',Desc)
    // localStorage.setItem('mainTask',mainTask)

    setDesc("");
    setTask("");
  };

  let renderTask = <h1>No task Availeable</h1>;

  const deleteHandaler = (i) => {
    let taskdelete = [...mainTask];
    taskdelete.splice(i, 1);
    setmainTask(taskdelete);
  };

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className=" border border-black p-2 mt-1">
          <div className="flex justify-between items-center ">
            <h4 className=" text-base font-bold">{t.Task}</h4>
            <h4 className=" text-base font-bold">{t.Desc}</h4>
            <button
              onClick={() => {
                deleteHandaler(i);
              }}
              className=" bg-red-500 text-white py-4 px-6 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  // auth.currentUser ? (
  //   <button className="text-black bg-white px-7 py-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">
  //   signin With Google
  //             </button>

  return (
    <>
  <Header/>
      <form
        className="flex flex-col items-center  md:flex-row  md:items-start  md:justify-between  md:gap-5  md:px-20  md:py-8  md:m-11  justify-between"
        onSubmit={SubmitHandeler}
      >
        <input
          type="text"
          className=" md:px-9 px-5 py-4 m-11 border-zinc-800 rounded border-[3px] "
          placeholder="Write Your Tasks"
          value={Task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <input
          type="text"
          className=" md:px-9 px-5 py-4 m-11 border-zinc-800 rounded border-[3px]"
          placeholder="Write Your Description"
          value={Desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />

        <button className=" bg-black text-white mt-11 px-7 py-4 rounded">
          Add Item
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-300 w-full">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default App;
