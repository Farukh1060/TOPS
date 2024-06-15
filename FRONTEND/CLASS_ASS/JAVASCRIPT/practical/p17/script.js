let sub = document.getElementById("sub")
let form = document.getElementById("form")

function get(){
    
}

form.addEventListener("submit",valadate)
function valadate(event){
    event.preventDefault()
    let f_name = document.getElementById("f_name").value
    console.log(f_name)
}