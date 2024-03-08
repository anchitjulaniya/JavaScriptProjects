let headerSection = document.getElementById("headerSection");
let contentSection = document.getElementById("contentSection");


let fName = document.querySelector(".fName");
let lName = document.querySelector(".lName");
// let country = document.querySelector(".country");
const dropdownItems = document.querySelectorAll('.dropdown-content a');
let score = document.querySelector(".score");
let submitButton = document.getElementById("submitButton");
let dropbtn = document.getElementById("dropbtn")

let arrayObj = [
    {
        fName : "Kusal",
        lName : "Mendis",
        country:"Sri Lanka",
        score: 74
    },
    {
        fName : "Lockie",
        lName : "Furguson",
        country:"New Zealand",
        score: 124
    },
    {
        fName : "Dhruv",
        lName : "Jurel",
        country: "Ireland",
        score: 119
    },
    {
        fName : "Virat",
        lName : "Kohli",
        country:"India",
        score: 148
    },
    {
        fName : "Shakib",
        lName : "Al Hasan",
        country:"Bangladesh",
        score: 91
    },
    {
        fName : "Glenn",
        lName : "Maxwell",
        country:"Australia",
        score: 81
    },
    {
        fName : "Shoaib",
        lName : "Malik",
        country:"Pakistan",
        score: 104
    },
    {
        fName : "Naveen-ul-Haq",
        lName : "",
        country:"Afganistan",
        score: 96
    },
    {
        fName : "Heinrich",
        lName : "Klaasen",
        country:"South Africa",
        score: 67
    },
    
]

let selectedCountry;
document.addEventListener('DOMContentLoaded', function () {
    
    
    dropdownItems.forEach(item => {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        selectedCountry = this.getAttribute('data-country');
        dropbtn.innerText = selectedCountry;
        // console.log('You selected ' + selectedCountry);
        
      });
    });
  });
  

submitButton.addEventListener("click",(e)=>{
    e.preventDefault();
    if(fName.value.trim() =="" || lName.value.trim()== "" || selectedCountry=="" || score.value.trim() == "" ){
        alert("Please fill all fields");
    }
   else{
    let playerData = {
                    fName : fName.value,
                    lName : lName.value, 
                    country :selectedCountry,
                    score : score.value ,
                }
   arrayObj.push(playerData);
   console.log(arrayObj);
    displayElement();
    }
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
        div.style.justifyContent = "start";
        div.style.alignItems = "start";
        div.style.paddingLeft = "70px"
        div.style.paddingRight = "50px"
        div.style.transition = "1s"
        div.style.marginTop = "10px"
        // div.style.fontSize = "1.2rem"
        
        div.innerHTML = `<span class="w-[70px] pr-[15px]">${index+1}</span>
                        <span class="w-[180px] ">${e.fName} ${e.lName}</span>
                         <span class="w-[80px] "><img style="width: 30px; height: 30px;" src="./flag/${arrayObj[index].country}.png" alt="India Flag"></span>
                         <span class="w-[130px] ">${e.country}</span>
                         <span class="w-[90px] ">${e.score}</span>
                         <span class="w-[218px] flex justify-evenly items-center">
                            <img title="${index}" id="deleteButton" class="h-[30px] w-[31px] hover:cursor-pointer" src="bin.png" onclick="${()=>deleteFunction(index)}">
                            <span title="${index}" id="plus5" class="rounded-full bg-blue-500  px-[6px] py-[2px] hover:cursor-pointer" onclick="${(e)=>updateScore(index, e)}" >+5</span>
                            <span title="${index}" id="minus5" class="rounded-full bg-red-500 px-[8px]  py-[2px] hover:cursor-pointer" onclick="${(e)=>updateScore(index, e)}">-5</span>  
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









