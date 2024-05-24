let user = {
    id:101,
    email:"abc@gmail.com",
    personalInfo:{
        name:"xyz",
        address: {
            street:"ghi",
            city:"sur",
            country:"india"
        }
    }
}

// console.log(user);

//axcess nested object property
// console.log(user.id);
console.log(user.personalInfo.address.country);