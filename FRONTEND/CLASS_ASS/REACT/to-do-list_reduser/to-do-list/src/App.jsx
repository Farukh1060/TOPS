import react, { useReducer, useState } from "react";
import "./App.css";
import Title from "./component/Title/Title";
import Add_task from "./component/Add_task/Add_task";
import Add_list from "./component/Add_list/Add_list";
import { todoitem_context } from "./Store/todoitem_store";

  const getdispatchdata = (list_data,action)=>{
    
    let newlist = list_data;
    if(action.type==="add_data"){
       newlist = [...list_data, {fullname:action.data.fullname,date:action.data.date}];
    }else if (action.type ===""){

    }




    return newlist;
  }


function App() {
  // const list_datas = [
  //   {
  //     fullname: "xyz",
  //     date: new Date(2025, 9, 25),
  //   },
  //   {
  //     fullname: "xyzuvw",
  //     date: new Date(2024, 8, 26),
  //   },
  // ];
  // console.log(list_datas)

  // const [list_data, setlistdata] = useState(list_datas);
  const[list_data,dispactdata]=useReducer(getdispatchdata,[])

  const onaddclick = (newlist_data) => {
    const setlistdata = {
      type:"add_data",
      data : newlist_data

    }
    dispactdata(setlistdata)

    // const newlist = [...list_data, newlist_data];
    // setlistdata(newlist);
  };

  const removehandler = (ele) => {
    const newlist = list_data.filter((element) => element.fullname != ele);
    setlistdata(newlist);
  };

  return (
    <todoitem_context.Provider value={{list_data,onaddclick,removehandler}}>
  
      <Title></Title>
      <Add_task ></Add_task>
      <Add_list ></Add_list>
    

      </todoitem_context.Provider>
  );
}

export default App;