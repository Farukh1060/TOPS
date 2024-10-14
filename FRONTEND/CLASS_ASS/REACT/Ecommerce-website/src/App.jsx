import { useState } from 'react'
import './App.css'

import Navbar from './Components/Navbar/Navbar'
import Slider from './Components/Slider/slider'

function App() {


  const [drk_btn ,setdrk_btn] = useState([])
  const dark_Md_on = ()=>{
    if(drk_btn.includes("dark")){
      setdrk_btn([])
    }
    else{

      setdrk_btn("dark")
    }
  }


  return(<div className={`${drk_btn}`}>
    <Navbar drk_btn={drk_btn} dark_Md_on={dark_Md_on}></Navbar>
    <Slider></Slider>
  
  </div>)
}

export default App
