let setting_container = document.getElementById("sett_con");
let profile_img = document.getElementById("pro_img");
profile_img.addEventListener("click",function(){
    setting_container.classList.toggle("dblock");
})

let btnn = document.getElementById("button")
btnn.addEventListener("click",function(){
    let body =
    this.classList.toggle("togl")
    document.body.classList.toggle("dark_them")
    // btn.toggleAttribute("style","right: 2px;")
})


