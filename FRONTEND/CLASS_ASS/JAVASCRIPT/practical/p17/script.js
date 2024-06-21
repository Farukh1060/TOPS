let submit = document.getElementById("sub")

let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let emt_inp = document.querySelectorAll("input")

let male = document.getElementById("male")
let fmale = document.getElementById("fmale")
let err = document.getElementById("err")

let msg = document.getElementsByTagName("P")
// console.log(msg)

// let keys = msg.keys()
// console.log(keys)

submit.addEventListener("click",chk)

function chk (e){
    e.preventDefault()
    first_name()
    last_name()
    gender()

}




function first_name(){

    let c_name = (fname.value).trim()
    let ptn = /^[a-z]*$/
    if(c_name == ""){
        msg[0].innerHTML = "empty";
        msg[0].classList.add("msg")
        emt_inp[0].classList.add("error")
    }else if(!ptn.test(c_name)){
        msg[0].innerHTML = "only char";
        msg[0].classList.add("msg")
        emt_inp[0].classList.add("error")
    
    }else{
        msg[0].innerHTML = "";
        msg[0].classList.remove("msg")
        emt_inp[0].classList.remove("error")
    }

}

function last_name(){

    let c_name = (lname.value).trim()
    let ptn = /^[a-z]*$/
    if(c_name == ""){
        msg[1].innerHTML = "empty";
        msg[1].classList.add("msg")
        emt_inp[1].classList.add("error")
    }else if(!ptn.test(c_name)){
        msg[1].innerHTML = "only char";
        msg[1].classList.add("msg")
        emt_inp[1].classList.add("error")
    
    }else{
        msg[1].innerHTML = "";
        msg[1].classList.remove("msg")
        emt_inp[1].classList.remove("error")
    }

}
function gender(){

    // let c_name = (lname.value).trim()
    
    if(male.checked == false && fmale.checked == false){
        msg[2].innerHTML = "select one!!";
        msg[2].classList.add("msg")
        err.classList.add("boder")
        
    }else{
        msg[2].innerHTML = "";
        msg[2].classList.remove("msg")
        err.classList.remove("boder")
    }

}