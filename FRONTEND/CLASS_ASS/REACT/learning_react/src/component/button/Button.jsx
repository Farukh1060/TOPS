import "./Button.css"

const Button = (props)=>{
    return <button onClick={()=>{onRmvBtnClick(e)}}>{props.btnName}</button>
        
}
export default Button