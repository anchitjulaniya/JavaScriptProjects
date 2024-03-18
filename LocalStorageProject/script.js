let textArea = document.getElementById("textArea");

let textAreaValue = textArea.value;
textArea.addEventListener("keydown",()=>{
    textAreaValue = textArea.value;
    console.log(textAreaValue);
    localStorage.setItem("value",textAreaValue);
})

window.addEventListener("load",()=>{
    textArea.innerText = localStorage.getItem("value");
})











