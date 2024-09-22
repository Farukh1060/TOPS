import react ,{ useState } from 'react'
import Title from "./component/Title/Title";
import "./App.css"
import Input from "./component/Input/Input";
import Food_item from "./component/Food_item/Food_item";
import styles from "./App.module.css"


let food_lists = ["apple","mango","pineapple"]
const App = () =>{

   let [food_list,setfood_list]=useState(food_lists)
  const Inputvaluehandler = (e) =>{
    
    if(e.key ==="Enter"){

      if(food_list.includes(e.target.value)==false){
        const updatelist = [...food_list, e.target.value]
        setfood_list(updatelist)
        e.target.value =""
        
      }else if(food_list.includes(e.target.value)==true){
        alert("same value")
        e.target.value =""
      }

    }    
 }

 

  return(
    <div className = {styles.container}>
      <Title></Title>
      <Input Inputvaluehandler={Inputvaluehandler}></Input>
      
      <Food_item food_list={food_list} ></Food_item>
    
    </div>
  );
 }

 export default App