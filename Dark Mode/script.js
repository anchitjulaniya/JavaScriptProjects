const bodyEle = document.getElementsByTagName("body")[0];
const changemode = document.querySelector("#changeMode");
const h1 = document.getElementsByTagName("h1")[0];
let toggled = false;
changemode.addEventListener('click',()=>{
    if(!toggled)
    { 
        bodyEle.style.backgroundColor = "black";
        bodyEle.style.color = "white";
        changemode.style.backgroundColor = "rgb(34,34,34)";
        toggled = true;
    }
    else{
        bodyEle.style.backgroundColor = "white";
        bodyEle.style.color = "black";
        changemode.style.backgroundColor = "rgb(34,34,34)";
        
        toggled = false;
    }
})
console.log();












