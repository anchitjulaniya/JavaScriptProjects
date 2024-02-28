// const document.body = document.getElementsByTagName("body")[0];

const changemode = document.querySelector("#changeMode");
const h1 = document.getElementsByTagName("h1")[0];
const circle = document.getElementById("circle")
let toggled = false;
changemode.addEventListener('click',()=>{
    if(!toggled)
    { 
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        changemode.style.backgroundColor = "rgb(34,34,34)";
        circle.style.left = "5px"; 
        toggled = true;
        console.log(toggled);
    }
    else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        changemode.style.backgroundColor = "rgb(34,34,34)";
        circle.style.left = "77px"; 
        toggled = false;
        console.log(toggled);
    }
    console.log(toggled);
})













