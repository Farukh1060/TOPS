
import React from 'react'
import Navbar from './components/navbar'
import Login from './components/Login'
import {BrowserRouter ,Routes ,Route} from "react-router-dom"
import Regestration from './components/Regestration'
import Slider from './components/Slider'
import Featured_catagory from './components/Featured_catagory'


const App = () => {
  return (<>

  <BrowserRouter>

    <Navbar></Navbar>
    <Slider></Slider>
    <Featured_catagory></Featured_catagory>
    <Routes>
      
      <Route path='/login' element={<Login></Login>} ></Route>
      <Route path='/reg' element={<Regestration></Regestration>} ></Route>
    </Routes>
  
  
  </BrowserRouter>
  <div className='mt-20'>

  </div>
    
    </>
  )
}

export default App