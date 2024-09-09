import react ,{ useState } from 'react';
import "./app.css";

import Input from './component/input';
import Button from './component/button/Button';
import List from './component/List/List';


function App() {
    let btn = "add";
    const rmv_item = ()=> {
      console.log("ok")
  }
    
  return <>
          <h1>To-Do List</h1>
          <div className='inp'>
          <Input></Input>
          <Button btnName = {btn}></Button>
          </div>
          <List onRmvBtnClick = {rmv_item}></List>
  </>
 
  
}

export default App
