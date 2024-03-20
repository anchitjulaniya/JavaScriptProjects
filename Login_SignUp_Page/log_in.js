const submitLogin = document.getElementById("submit_loginPage")

const email = document.forms["login"]["email"];
const password = document.forms["login"]["password"];

let userList = JSON.parse(localStorage.getItem("users"));
console.log(userList);

submitLogin.addEventListener("click",(e)=>{
  
    userList.forEach((user)=>{
        if(email.value == "" || password.value == ""){
            alert("Fill all details");
        }
        else if(user.email === email.value && user.password === password.value){
            // window.
            alert("successfully Login")
        }
        else{
            alert("try again!, Incorrect email and password.")
        }
    })
})

