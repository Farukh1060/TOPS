// let num = document.getElementById("btn")

// num.addEventListener("click",chk)
// function chk(){
//   let val = document.getElementById("num1").value
//   let res = val % 2 ==0 ? ("even"): ("odd");
// document.getElementById("result_value").innerHTML = res;
// }

//a>b>c greatre among 
// let a =15 ,b= 19 , c= 18;

// let x = (a>b)?((a>c)?a:c):((b>c)? b:c)

// console.log(x);

//less among three
// debugger
let btn = document.getElementById("ent")
let i =0 ;
let j =2;
btn.addEventListener("click",chk)
let val = [];
function chk(){
  if(i<3){
    if(j < 4){
      document.getElementById("change").innerHTML = j;
    }
     val[i] = document.getElementById("num1").value;
    //  console.log(val[i]);
     i++;
     document.getElementById("num1").value = null;
    //  console.log(val)
    }
    j++;
    // console.log(val)
    return val[i]
  }
console.log(val)




