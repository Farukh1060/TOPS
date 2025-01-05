import React, { useRef, useState } from 'react'
import Navbar from './Components/Navbar'
import Input from './Components/Input'
import Model from './Components/Model'
import Contact_card from './Components/Contact_card'
import { db } from '../../Firestore/src/Firestore'
import{collection,addDoc} from "firebase/firestore"


const  App = () => {

  const contactref = collection(db,"contact")
  console.log(db)

  const name = useRef()
  const email = useRef()


  const addcontact = (e)=>{

    e.preventDefault()
    const contact ={
        "contactname":name.current.value,
        "email":email.current.value
    }
   
    return(addDoc(contactref,contact))
}



  const [contact,setcontact] =useState([])
  const [on_model,seton_model] = useState(false)


 const close_model = ()=> {
  // console.log("ok")
    seton_model(false)
 }

 const open_model = ()=> {
  // console.log("ok")
    seton_model(true)
 }


  return (
    <div className='mx-auto max-w-[370px] '>

      <Navbar></Navbar>
      <Input open_model={open_model}></Input>
      <Contact_card></Contact_card>
      {on_model? <Model close_model={close_model} on_model={on_model} name={name} email={email} addcontact={addcontact}></Model>: ""}
     

    </div>
  )
}

export default  App