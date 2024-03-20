const submitBtn = document.getElementById("submit");

const fname = document.forms["signUp"]["FirstName"];
const lname = document.forms["signUp"]["LastName"];
const email = document.forms["signUp"]["Email"];
const password = document.forms["signUp"]["password"];
const confirmPassword = document.forms["signUp"]["confirmPassword"];
const mobile = document.forms["signUp"]["phoneNumber"];

// console.log(fname, lname, email, password, confirmPassword, mobile);
let userList = [];



submitBtn.addEventListener("click",()=>{
    if(fname.value == "" || lname.value == "" || email.value == "" || password.value == "" || confirmPassword.value == "" || mobile.value == "" ){
        alert("Fill all details");

    }else if(confirmPassword.value !== password.value){
        alert("Password are not same");
    }
    else{
        let user = {
            firstName : fname.value,
            lastName : lname.value,
            email : email.value,
            password : password.value,
            confirmPassword : confirmPassword.value,
            mobile : mobile.value
        }
        // userList = JSON.parse(localStorage.getItem("users"));
        userList.push(user);
        
        localStorage.setItem("users",JSON.stringify(userList));
    

    }

    

   
    

    

})













































































