
document.getElementById("btn").addEventListener("click",sum_num);




function sum_num(){
    let sum =0;
    document.getElementById("result_value").innerHTML = ''
    let num = document.getElementById("num1").value
    while(num/10 !=0){

        let R_num = num%10;
        sum = sum + R_num;
        document.getElementById("result_value").innerHTML=(sum);
        num = Math.trunc(num/10);
    }

    
}

