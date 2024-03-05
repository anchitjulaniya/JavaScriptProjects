const date = new Date();
let day = date.getDate();
const monthName = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
let month = monthName[date.getMonth()];
let year = date.getFullYear();
console.log(day, month, year);
const fullDate = `${day} ${month} ${year}`;
let setdate = document.getElementById("setdate");
setdate.innerText = `${fullDate}`;
// --date completed

const completedTask = document.getElementById("completedTask");
const uncompletedTask = document.getElementById("uncompletedTask");
const createButton = document.getElementById("createButton");
const inputBox = document.getElementById("inputBox");

let num = 0;
createButton.addEventListener("click",()=>{
    
    let spanContainer = document.createElement("span");
    spanContainer.style.display = "flex"
    spanContainer.style.gap = "10px"    
    spanContainer.style.alignItems = "center"
    spanContainer.style.marginTop = "10px";
    let idValue = `id${num}`;
    
    spanContainer.innerHTML = `<input class="inputs h-[25px] w-[25px] border-cyan-700 border-2 checked:appearance-auto appearance-none bg-white rounded xyz" type="checkbox" onclick="appendAndRemove(event)" id=id${num}>
    <span class="w-[85%] overflow-x-auto scollbar-hide text-black spanxyz">${inputBox.value}</span>`
   
    uncompletedTask.append(spanContainer);

    // console.log(inputText);
})
let appendAndRemove = function(e){
   
    // console.log(e.target.id);
    // console.log(e.target.parentElement);
    let sp = e.target.parentElement;
    let textSpan = sp.children[1];
    // console.log(sp.children[1]);
    // console.log(sp.children[1].innerText)
    // e.target.innerText = sp.children[1].innerText;
    // e.target.parentElement.append(document.createElement("del").append(textSpan));
    

    sp.remove();
    completedTask.append(sp);
    e.target.style.accentColor = "rgb(147,146,146)";


    // console.log()
   
}