let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let country = document.getElementById("country").value;
let phnNo = document.getElementById("phnNo").value;
let state = document.getElementById("state").value;
let city = document.getElementById("city").value;
let village = document.getElementById("village").value;

let container = document.addEventListener("keydown",(event)=>{
    let id = event.target.id;
    console.log(id);
    let value = document.getElementById(id).value;
    console.log(value);
    localStorage.setItem(id,value);
    // id.innerText = localStorage.getItem(id);
})

window.addEventListener("load",()=>{
    document.getElementById("x").innerText = localStorage.getItem("fname");
    lname.innerText = localStorage.getItem("lname");
    country.innerText = localStorage.getItem("country");
    phnNo.innerText = localStorage.getItem("phnNo");
    state.innerText = localStorage.getItem("state");
    city.innerText = localStorage.getItem("city");
    village.innerText = localStorage.getItem("village");
  
});






















