import react ,{ useState } from 'react'
import "./Add_list_item.css"



 const Add_list_item = (probes) =>{

     
    const [name,setname] = useState(probes.name)
    const [date,setdate] = useState(probes.date)
    let click_handeler = ()=>{
       setname(name)
       setdate(date)
    }
    

    return <center className="list_item">
        <div><span>{name}</span></div>
        <div><span>{date}</span></div>
        <button onClick={click_handeler}>remove</button>
    </center>
 }
 export default Add_list_item