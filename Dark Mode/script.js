const bodyEle = document.getElementsByTagName("body")[0];
const changemode = document.querySelector("#changeMode");
const h1 = document.getElementsByTagName("h1")[0];
const circle = document.getElementById("circle")
let toggled = false;
changemode.addEventListener('click',()=>{
    if(!toggled)
    { 
        bodyEle.style.backgroundColor = "black";
        bodyEle.style.color = "white";
        changemode.style.backgroundColor = "rgb(34,34,34)";
        circle.style.right = "5px"; 
        toggled = true;
    }
    else{
        bodyEle.style.backgroundColor = "white";
        bodyEle.style.color = "black";
        changemode.style.backgroundColor = "rgb(34,34,34)";
        circle.style.left = "5px"; 
        toggled = false;
    }
})













