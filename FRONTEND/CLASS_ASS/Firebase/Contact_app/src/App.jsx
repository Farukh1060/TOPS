import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Input from './Components/Input'

const  App = () => {




  const [contact,setcontact] =useState([])
  return (
    <div className='mx-auto max-w-[370px]'>

      <Navbar></Navbar>
      <Input></Input>

    </div>
  )
}

export default  App