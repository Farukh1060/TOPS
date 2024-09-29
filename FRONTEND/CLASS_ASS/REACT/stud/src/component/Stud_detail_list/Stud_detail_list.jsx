const Stud_detail_list = ({ele,removebtnhandler}) => {
  // console.log(details)
  return (<tr>
    <td>{ele.name}</td>
    <td>{ele.email}</td>
    <td>{ele.number}</td>
    <td><button onClick={()=>{removebtnhandler(ele.name)}}>remove</button></td>
  </tr>
    
  );
};

export default Stud_detail_list;
