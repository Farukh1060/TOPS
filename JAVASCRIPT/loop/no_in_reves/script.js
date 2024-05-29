
document.getElementById("btn").addEventListener("click",rev_num);




function rev_num(){
    document.getElementById("result_value").innerHTML = ''
    let num = document.getElementById("num1").value
    while(num/10 !=0){
        let R_num = num%10;
        document.getElementById("result_value").innerHTML+=(R_num);
        num = Math.trunc(num/10);
    }

    
}

