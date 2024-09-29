import React, { useState } from "react";
import Input_field from "./component/Input_field/Input_field";
import Stud_detail from "./component/Stud_detail/Stud_detail";
import Title from "./component/Title/Title";
import styles from "./App.module.css";

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
  let [details,setdetails] = useState([]);

  console.log(details);
  const resiveformdata = (studdata) => {
    const newstuddata = [studdata,...details];
    setdetails(newstuddata);
    // console.log(studdata);
  };

  const removebtnhandler = (ele)=>{
    const newstuddata = details.filter(element =>(element.name != ele))
    setdetails(newstuddata)
  }

  return (<div className={styles.container}>
    <Title></Title>
    <Input_field resiveformdata={resiveformdata}></Input_field>
    <Stud_detail details={details} removebtnhandler={removebtnhandler}></Stud_detail>
  </div>
    
  );
};

export default App;
