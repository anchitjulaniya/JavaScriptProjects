const completedTask = document.getElementById("completedTask");
const uncompletedTask = document.getElementById("uncompletedTask");
const createButton = document.getElementById("createButton");
const inputBox = document.getElementById("inputBox");

// console.log(inputText);
let num = 0;
let allInputs;
createButton.addEventListener("click",()=>{
    
    let spanContainer = document.createElement("span");
    spanContainer.style.display = "flex"
    spanContainer.style.gap = "10px"    
    spanContainer.style.alignItems = "center"
    
    spanContainer.innerHTML = `<input class="inputs h-[25px] w-[25px] outline-none  border-0" type="checkbox"  id="id${num} ">
    <span class="w-[85%] text-black">${inputBox.value}</span>`
    uncompletedTask.appendChild(spanContainer);

// task add to uncompleted zone
    // let inputId = `id${num}`;
    // console.log(inputId);

    // let checkboxValue = document.getElementById("inputId");
    
    // console.log(checkboxValue
    allInputs =document.querySelectorAll(".inputs")
    clickInputFnction(allInputs)

num++;
})

// let inp = document.getElementById("id0")
// console.log(inp);
// let removeAndAppend = function(e){
//     let checkboxValue = checkboxObject.checked;
//     console.log(checkboxValue);
//     let inputId =  e.getElementById("");
// }

let clickInputFnction = function(allInputs){
    // uncompletedTask.remove(id)
    allInputs.forEach(element => {
        element.addEventListener("click",clickedInpt)     
    });
}

function clickedInpt(e){
    console.log(e.target.checked, e.target.parentElement);
    uncompletedTask.removeChild(e.target.parentElement)
    console.log(e.target.parentElement);
    console.log(uncompletedTask);
    completedTask.appendChild(e.target.parentElement)
    // uncompletedTask.remove(e.target.parentElement)
}
// uncompletedTask.addEventListener("click",()=>{

// })










