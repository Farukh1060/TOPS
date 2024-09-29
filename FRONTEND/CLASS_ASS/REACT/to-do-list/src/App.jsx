import react, { useState } from "react";
import "./App.css";
import Title from "./component/Title/Title";
import Add_task from "./component/Add_task/Add_task";
import Add_list_item from "./component/Add_list_item/Add_list_item";
import Add_list from "./component/Add_list/Add_list";

function App() {
  const list_datas = [
    {
      fullname: "xyz",
      date: new Date(2025, 9, 25),
    },
    {
      fullname: "xyzuvw",
      date: new Date(2024, 8, 26),
    },
  ];
  // console.log(list_datas)

  const [list_data, setlistdata] = useState(list_datas);
  const onaddclick = (newlist_data) => {
    const newlist = [...list_data, newlist_data];
    setlistdata(newlist);
  };

  const removehandler = (ele) => {
    const newlist = list_data.filter((element) => element.fullname != ele);
    setlistdata(newlist);
  };

  return (
    <>
      <Title></Title>
      <Add_task onaddclick={onaddclick}></Add_task>
      <Add_list list_data={list_data} removehandler={removehandler}></Add_list>
    </>
  );
}

export default App;
