let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let country = document.getElementById("country");
let phnNo = document.getElementById("phnNo");
let state = document.getElementById("state");
let city = document.getElementById("city");
let village = document.getElementById("village");

let userDetails ;

if(JSON.parse(localStorage.getItem("user"))){
   userDetails = JSON.parse(localStorage.getItem("user"));
   console.log(userDetails);
//    fname.innerText = ;
//     lname.innerText = lnameValue;
//     country.innerText = countryValue;
//     phnNo.innerText = phnNoValue;
//     state.innerText = stateValue;
//     city.innerText = cityValue;
//     village.innerText = villageValue;

}else{
    let fnameValue = prompt("Enter Your First Name : ")
    let lnameValue = prompt("Enter Your Last Name : ")
    let countryValue = prompt("Country: ")
    let phnNoValue = prompt("Phone NUmber: ");
    let stateValue = prompt("State : ")
    let cityValue = prompt("City : ")
    let villageValue = prompt("Village : ")
    let newUser = {
        name: fnameValue+" "+lnameValue,
        country : countryValue,
        mobile : phnNoValue,
        state : stateValue,
        city : cityValue,
        village : villageValue 
    }
    fname.innerText = fnameValue;
    lname.innerText = lnameValue;
    country.innerText = countryValue;
    phnNo.innerText = phnNoValue;
    state.innerText = stateValue;
    city.innerText = cityValue;
    village.innerText = villageValue;

    let userString  = JSON.stringify(newUser);
    userDetails.push("user",userString);
}  
  

    // country.innerText = localStorage.getItem("country");
    // phnNo.innerText = localStorage.getItem("phnNo");
    // state.innerText = localStorage.getItem("state");
    // city.innerText = localStorage.getItem("city");
    // village.innerText = localStorage.getItem("village");
  


console.log(fnameValue, lnameValue,countryValue, stateValue,cityValue,villageValue);

// let container = document.addEventListener("keydown",(event)=>{
//     let id = event.target.id;
//     console.log(id);
//     let value = document.getElementById(id).value;
//     console.log(value);
//     localStorage.setItem(id,value);
//     // id.innerText = localStorage.getItem(id);
// })

// window.addEventListener("load",()=>{
    // document.getElementById("x").innerText = localStorage.getItem("fname");
    // lname.innerText = localStorage.getItem("lname");
    // country.innerText = localStorage.getItem("country");
    // phnNo.innerText = localStorage.getItem("phnNo");
    // state.innerText = localStorage.getItem("state");
    // city.innerText = localStorage.getItem("city");
    // village.innerText = localStorage.getItem("village");
  
// });






















