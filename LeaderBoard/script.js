let headerSection = document.getElementById("headerSection");
let contentSection = document.getElementById("contentSection");

// console.log(headerSection, contentSection);

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
   let playerData = {
                    fName : fName.value,
                    lName : lName.value, 
                    country : country.value,
                    score : score.value ,
                    
   }
   arrayObj.push(playerData);
   console.log(arrayObj);
    displayElement();
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
        div.style.gap = "1rem"
        div.style.paddingLeft = "100px"
        div.style.transition = "1s"
        
        div.innerHTML = `<span class="w-1/7 mx-auto">${index+1}</span>
                        <span class="w-1/5 ">${e.fName}</span>
                         <span class="w-1/5 ">${e.lName}</span>
                         <span class="w-1/5 ">${e.country}</span>
                         <span class="w-1/5 ">${e.score}</span>`
            
        contentSection.append(div);
        
        
    })
}














