
import "./List.css"
import Button from "../button/Button"
let btn = "delete"
function List(){
    const rmv_item = ()=> {
        console.log("ok")
    }
    return<>
    <ul>
        <li>milk <Button btnName = {btn} onRmvBtnClick = {rmv_item}></Button></li>
        
    </ul>
    </>
}
export default List