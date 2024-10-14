import React from "react"
import "./App.css"
import Navbar from "./component/Navbar/Navbar"
  


const App =()=>{

  const menu = ["shop","men","women","kids"]



  return(
    <>
     <Navbar menu={menu}></Navbar>
    <Right_bar></Right_bar>
    </>
  )
}

export default App  