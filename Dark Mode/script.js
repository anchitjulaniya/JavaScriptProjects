const bodyEle = document.getElementsByTagName("body")[0];
const changemode = document.querySelector("#changeMode");
const h1 = document.getElementsByTagName("h1")[0];
changemode.addEventListener('click',()=>{
    bodyEle.style.backgroundColor = "black";
    bodyEle.style.color = "white";
    changemode.style.backgroundColor = "rgb(34,34,34)";
})
console.log();












