const submitLogin = document.getElementById("submit_loginPage")

const email = document.forms["login"]["email"];
const password = document.forms["login"]["password"];

let userList = JSON.parse(localStorage.getItem("userList"));
console.log(userList);

submitLogin.addEventListener("click",(e)=>{
    e.preventDefault();
    if(email.value == "" || password.value == ""){
        alert("Fill all details");
        return;
    }
    userList.forEach((user)=>{
        if(user.email === email.value && user.password === password.value){
           
            alert("successfully Login");
            // return;
        }
        else{
            alert("try again!, Incorrect email and password.")
        }
    })
})

