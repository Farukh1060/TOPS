let op_me = document.getElementById("xicon")
let cl_me = document.getElementById("bars")

let menu = document.getElementById("togg_me")
cl_me.addEventListener("click",function(){
    op_me.setAttribute("style","display: block;")
    cl_me.setAttribute("style","display: none;")
    menu.setAttribute("style","display: block;")
})
op_me.addEventListener("click",function(){
    cl_me.setAttribute("style","display: block;")
    op_me.setAttribute("style","display: none;")
    menu.setAttribute("style","display: none;")
})

