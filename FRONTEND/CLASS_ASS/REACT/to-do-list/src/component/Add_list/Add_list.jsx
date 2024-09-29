import Add_list_item from "../Add_list_item/Add_list_item"


const Add_list = ({list_data,removehandler})=>{

    return<>
    {list_data.map(ele =>(<Add_list_item key={ele.fullname} ele={ele} removehandler={removehandler}></Add_list_item>))}
        
    </>
}
export default Add_list