let setting_container = document.getElementById("sett_con");
let profile_img = document.getElementById("pro_img");
profile_img.addEventListener("click",function(){
    setting_container.classList.toggle("dblock");
})

let btnn = document.getElementById("button")
btnn.addEventListener("click",function(){
    this.classList.toggle("togl")
    // btn.toggleAttribute("style","right: 2px;")
})