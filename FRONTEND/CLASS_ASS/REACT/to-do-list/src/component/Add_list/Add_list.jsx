import Add_list_item from "../Add_list_item/Add_list_item"


const Add_list = ()=>{
    let iname = "new name";
let idate = "new date";
    return<>
        <Add_list_item name = {iname} date = {idate}></Add_list_item>
        <Add_list_item name = {iname} date = {idate}></Add_list_item>
    </>
}
export default Add_list