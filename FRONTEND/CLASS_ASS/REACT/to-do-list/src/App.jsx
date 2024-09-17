import react ,{ useState } from 'react'
import "./App.css"
import Title from './component/Title/Title'
import Add_task from './component/Add_task/Add_task'
import Add_list_item from './component/Add_list_item/Add_list_item'




function App() {

  // const onaddbtnclick = (todotask,todotaskdate)=>{
  //   let [todotask,settodotask] = useState("")
  //   let setdata = ()=>{

  //   }
    
  // }
  let iname = "mastercam"
  let idate = "25/9/2024"

  return ( <>
    <Title></Title>
    <Add_task ></Add_task>
    <Add_list_item name = {iname} date = {idate} ></Add_list_item>
    <Add_list_item name = {iname} date = {idate} ></Add_list_item>
    </>
  )
}

export default App
