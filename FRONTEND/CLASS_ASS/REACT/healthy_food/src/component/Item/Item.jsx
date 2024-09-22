import style from "./Item.module.css"


const Item =({food_list,byebtnhandler,activelist,removebtnhandler})=>{
// console.log(activelist)
    


    return(
        <>
            {food_list.map(ele =>(<li key={ele} className={`list-group-item mt-2 mb-2 ${activelist.includes(ele)?"active":" "}`}>{ele} {activelist.includes(ele)?<button className={`btn btn-danger ${style.bbtn}`} onClick={()=>removebtnhandler(ele)} >Remove</button>:<button className={`btn btn-primary ${style.bbtn}`} onClick={()=>byebtnhandler(ele)} >Bye</button>}</li>))}
        </>
    );
}

export default Item