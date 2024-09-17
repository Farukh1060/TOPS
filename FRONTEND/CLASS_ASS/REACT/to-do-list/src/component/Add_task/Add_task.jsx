// import { useState } from "react"
import "./Add_task.css"
import React, {useState} from "react"





let Add_task = ({onaddclick} )=>{


let [task,settask]=useState("")
let [taskdate,settaskdate]=useState("")




const ontextchangehandeler = (e) =>{
    settask(e.target.value)
}

const ondatechangehandeler = (e) =>{
    settaskdate(e.target.value)
}

const onaddbuttoncickhandler = ()=>{
    onaddclick(task,taskdate)
    console.log(task)
    console.log(taskdate)
}


    return <div className="inp">
    <input type = "text" placeholder="enter To-Do-List" autoFocus onChange={ontextchangehandeler} value = {task}></input>
    <input type="date" onChange={ondatechangehandeler} value={taskdate}/>
    <button onClick={onaddbuttoncickhandler}> add </button>
    </div>
}
export default Add_task