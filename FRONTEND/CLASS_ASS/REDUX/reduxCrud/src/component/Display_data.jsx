import { useSelector } from "react-redux"



const Display_data = ()=>{
    const user = useSelector((state)=>{
        return state.Crud
    })
    console.log(user);
    

    return(
        <div className="row">
            <div className="col-6 card mx-auto mt-5 " style={{height:"400px"}}>
                <table className="table table-strip">
                    <thead>
                        <tr>
                            <td>user name</td>
                            <td>email</td>
                            <td>number</td>
                        </tr>
                    </thead>
                    <tbody>

                       {user.map((ele)=>{
                        return <tr>
                            <td>{ele.name}</td>
                            <td>{ele.email}</td>
                            <td>{ele.number}</td>
                            
                            </tr>
                       })} 
                       
                    </tbody>

                </table>
            </div>
        </div>

    )
}

export default Display_data