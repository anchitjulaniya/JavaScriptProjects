const submitBtn = document.getElementById("submit");

const fname = document.forms["signUp"]["FirstName"];
const lname = document.forms["signUp"]["LastName"];
const email = document.forms["signUp"]["Email"];
const password = document.forms["signUp"]["password"];
const confirmPassword = document.forms["signUp"]["confirmPassword"];
const mobile = document.forms["signUp"]["phoneNumber"];

let users;
// console.log(fname, lname, email, password, confirmPassword, mobile);
        if(JSON.parse(localStorage.getItem("userList"))){
            users = JSON.parse(localStorage.getItem("userList"));
        }else{
            users =  [];
        }
        console.log(users);

submitBtn.addEventListener("click",()=>{
    if(fname.value == "" || lname.value == "" || email.value == "" || password.value == "" || confirmPassword.value == "" || mobile.value == "" ){
        alert("Fill all details");

    }else if(confirmPassword.value !== password.value){
        alert("Password are not same");
    }
    else{
        users.forEach(element => {
            if(element.email === email.value && fname.value !== "" && lname.value !== "" &&  password.value !== "" && confirmPassword.value !== "" && mobile.value !== ""){
                alert("Already Registered");
                window.location.href = "./log_in.html"
            }
        });
        let newUser = {
            firstName : fname.value,
            lastName : lname.value,
            email : email.value,
            password : password.value,
            confirmPassword : confirmPassword.value,
            mobile : mobile.value
        }
        
        let userExists = users.some(user => user.email === newUser.email);

        if(userExists){
            alert("user alreay exists");
            return false;
        } else {
            users.push(newUser);
        }

        // userList = JSON.parse(localStorage.getItem("users"));
        
        localStorage.setItem("userList",JSON.stringify(users));
    }    

})













































































