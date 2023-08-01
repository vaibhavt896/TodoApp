// import React from 'react'

import { useState } from "react"

export default function Todo() {
    const[note, setNote] = useState("")
    const [tasks, setTasks] = useState([]);


    function Change(e){
        setNote(e.target.value)

    }
    function addTask() {
        if (note.trim() !== "") {
          setTasks([...tasks, note]);
setNote("");
        }
      }

      function handleKeyPress(e) {
        if (e.key === "Enter") {
          addTask();

        }
      }
       
  return (
    <div className="container">
        <label className="mx-3">Enter task</label>
      <input type="text" value ={note} onChange={Change} onKeyPress={handleKeyPress}/ >
        <button className ="btn btn-primary mx-3 px-5"onClick={addTask}>Add </button>
        <h2 className="my-5">Your text : {note}</h2>
<ul>

            {tasks.map((e, index) => {
                return (
                   <li className="addedList" key={index}>{e}</li> 
                )
            }) }
            
            </ul>    
            </div>
  )
}
