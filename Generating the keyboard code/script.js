
let keyCode = document.getElementById("keyCode"); 
let displayBox = document.getElementById("displayBox");
// let display = document.getElementById("display");

document.onkeydown = (event) =>{
   displayBox.innerHTML = `<span>Key Pressed-></span> <span class="eventKey">${event.key}</span>`;
   keyCode.innerHTML = `<span>Key Code-></span> <span class="eventKey">${event.keyCode}</span>`;
   keyCode.style.boxShadow = "0 0 400px rgba(0,0,0,0.1)";

   

}
