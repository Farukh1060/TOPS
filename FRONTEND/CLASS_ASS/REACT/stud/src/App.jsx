import React, { useEffect, useState } from "react";
import Input_field from "./component/Input_field/Input_field";
import Stud_detail from "./component/Stud_detail/Stud_detail";
import Title from "./component/Title/Title";
import styles from "./App.module.css";

import { db } from "./firestore";
import { addDoc, collection, deleteDoc, getDocs ,doc, updateDoc, getDoc} from "firebase/firestore";


const detail = [
  {
    name: "xyz",
    email: "xyz@email.com",
    number: 456123789,
  }, 
  {
    name: "xyzuvw",
    email: "xyzuvw@email.com",
    number: 4561237123,
  }
];
const App = () => {

  const studentref = collection(db,"students")

  let [details,setdetails] = useState([]);
  let [student ,setstudent] = useState({})
  // console.log(details)

  // get data from firestore and set to setdetails

  const getstudent = async ()=>{

    try{

      const studentrefdata = await getDocs(studentref)
      const student_data = studentrefdata.docs.map((doc)=>{
  
        // console.log(doc.data())
       return {
         id : doc.id,
        ...doc.data()}
  
      });
      setdetails(student_data)
    }catch(error){
      console.log(error)
    }

  }

 



//get data from form and set to firstore
  const resiveformdata = async (studdata) => {
    console.log(studdata.id);
    

if(studdata.id != undefined){

  await updateDoc(doc(studentref,studdata.id),studdata)

}else{
  
  await addDoc(studentref,studdata)
}

    
  };

//delete data from firestore 
  const removebtnhandler = async (id)=>{

    await deleteDoc(doc(studentref,id))
    getstudent()
    
    // const newstuddata = details.filter(element =>(element.id != id))
    // setdetails(newstuddata)
  }

  const editbtnhandler =async (id)=>{
const getsnap = await getDoc(doc(studentref,id))
    

setstudent({name :getsnap.data().name,email:getsnap.data().email,number:getsnap.data().number ,id:getsnap.id});


    console.log("ok")
  }


  useEffect( ()=>{
 
    console.log("123")
    getstudent()
    
   },[])
  
  return (<div className={styles.container}>
    <Title></Title>
    <Input_field resiveformdata={resiveformdata} student={student}></Input_field>
    <Stud_detail details={details} removebtnhandler={removebtnhandler} editbtnhandler={editbtnhandler}></Stud_detail>
  </div>
    
  );
};

export default App;
