let headerSection = document.getElementById("headerSection");
let contentSection = document.getElementById("contentSection");


let fName = document.querySelector(".fName");
let lName = document.querySelector(".lName");
let country = document.querySelector(".country");
let score = document.querySelector(".score");
let submitButton = document.getElementById("submitButton");

let arrayObj = [
    {
        fName : "Shubham",
        lName : "Gill",
        country: "India",
        score: 124
    },
    {
        fName : "Dhruv",
        lName : "Jurel",
        country: "India",
        score: 149
    },
    {
        fName : "Virat",
        lName : "Kohli",
        country:"India",
        score:120
    },
    {
        fName : "Rohit",
        lName : "Sharma",
        country:"India",
        score:81
    },
]

submitButton.addEventListener("click",(e)=>{
    e.preventDefault();
    if(fName.value.trim() =="" || lName.value.trim()== "" || country.value.trim()=="" || score.value.trim() == "" ){
        alert("Please fill all fields");
    }
   else{let playerData = {
                    fName : fName.value,
                    lName : lName.value, 
                    country : country.value,
                    score : score.value ,
                }
   arrayObj.push(playerData);
   console.log(arrayObj);
    displayElement();}
})
window.addEventListener("load", displayElement);

function displayElement(){
    
    contentSection.innerHTML = "";
    arrayObj.sort((a,b)=>{
        return b.score - a.score;
    })
// rank 1 2 3
    arrayObj.forEach((e, index)=>{

        let div = document.createElement("div");
        div.style.display = "flex";
        div.style.justifyContent = "space-evenly";
        div.style.alignItems = "start";
        div.style.paddingLeft = "100px"
        div.style.transition = "1s"
        div.style.marginTop = "10px"
        
        div.innerHTML = `<span class="w-1/8 pr-[15px]">${index+1}</span>
                        <span class="w-1/6 ">${e.fName}</span>
                         <span class="w-1/6 ">${e.lName}</span>
                         <span class="w-1/6 ">${e.country}</span>
                         <span class="w-1/8 ">${e.score}</span>
                         <span class="w-1/4 flex justify-evenly items-center">
                            <img title="${index}" id="deleteButton" class="h-[25px] w-[28px] hover:cursor-pointer" src="bin.png" onclick="${()=>deleteFunction(index)}">
                            <span title="${index}" id="plus5" class="rounded-full bg-green-300 px-[3.5px] py-[1px] hover:cursor-pointer" onclick="${(e)=>updateScore(index, e)}" >+5</span>
                            <span title="${index}" id="minus5" class="rounded-full bg-red-300 px-[4.5px] py-[1px] hover:cursor-pointer" onclick="${(e)=>updateScore(index, e)}">-5</span>  
                         </span>
                         `
            
        contentSection.append(div);
        
    })
}

contentSection.addEventListener("click",(e)=>{
    let index = Number(e.target.title)
    
    if(e.target.id == "plus5"){
        arrayObj[index].score = Number(arrayObj[index].score) + 5; 
        console.log(arrayObj[index].score);
    }
    else if(e.target.id == "minus5"){
        arrayObj[index].score = Number(arrayObj[index].score) - 5; 
        console.log(arrayObj[index].score);
    }
    else if(e.target.id == "deleteButton"){
        arrayObj.splice(index,1);
    }
    displayElement();
})










