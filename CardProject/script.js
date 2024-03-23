let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let phnNo = document.getElementById("phnNo");
let state = document.getElementById("state");
let country = document.getElementById("country");
let city = document.getElementById("city");
let village = document.getElementById("village");

let userDetails ;

if(JSON.parse(localStorage.getItem("user"))){
   userDetails = JSON.parse(localStorage.getItem("user"));
   
   console.log(userDetails);

   fname.innerText = userDetails.fname;
    lname.innerText = userDetails.lname;
    country.innerText = userDetails.country;
    phnNo.innerText = userDetails.mobile;
    state.innerText = userDetails.state;
    city.innerText = userDetails.city;
    village.innerText = userDetails.village;

}else{
    let fnameValue = prompt("Enter Your First Name: ");
    let lnameValue = prompt("Enter Your Last Name: ");
    let countryValue = prompt("Country: ");
    let phnNoValue = prompt("Phone Number: ");
    let stateValue = prompt("State: ");
    let cityValue = prompt("City: ");
    let villageValue = prompt("Village: ");

    console.log(fnameValue, lnameValue,countryValue, stateValue,cityValue,villageValue);

    let newUser = {
        fname: fnameValue, 
        lname:lnameValue,
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
  





















