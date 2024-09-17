
import "./List.css"
import Button from "../button/Button"
let btn = "delete"
function List(){
    
    return<>
    <ul>
        <li>milk <Button btnName = {btn} ></Button></li>
        
    </ul>
    </>
}
export default List