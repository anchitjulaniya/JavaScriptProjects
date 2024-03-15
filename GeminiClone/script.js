const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");
let displayContainer = document.getElementById("displayContainer");
let count =1;

import { GoogleGenerativeAI } from "@google/generative-ai";
    const API_KEY = "AIzaSyBIEScln1EtBCi61VYNPaogJ8U7Fe-LFEA";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = searchBox.value;
  
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

// adding style to displayContainer
  displayContainer.style.alignItems = "start";
//   displayContainer.style.paddingLeft = "20px";


  //   creating user div and attaching msg
  let divUser = document.createElement("div");
  divUser.style.display = "flex";
  divUser.style.justifyContent = "center";
  divUser.style.alignItems = "center";
  divUser.style.color = "white";
  divUser.style.backgroundColor = "rgb(30,31,32)";  
  divUser.innerText = searchBox.value;
  divUser.style.padding = "10px 20px";
  divUser.style.marginTop = "5px";
  divUser.style.borderRadius = "10px";

  displayContainer.append(divUser);
  
    
  console.log(text);
  //   creating Bot div and attaching bot answer
  let divBot = document.createElement("div");
  divBot.style.display = "flex";
  divBot.style.justifyContent = "center";
  divBot.style.alignItems = "center";
  divBot.style.color = "white";
  divBot.style.backgroundColor = "rgb(30,31,32)";
  divBot.style.padding = "10px 20px";
  divBot.style.marginTop = "5px";
  divBot.style.marginBottom = "15px";
  divBot.style.borderRadius = "10px";
  
  divBot.innerText = text;
  displayContainer.append(divBot);
}

// search Button click event 
searchBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(count === 1){
    displayContainer.innerText = "";  
    count++;
    }
    run();
})

// searchBox.addEventListener("keydown",(e)=>{
//     e.preventDefault();
    // console.log(typeof e.key);
    // if(e.key === "Enter"){
    //     if(count === 1){
    //         displayContainer.innerText = "";  
    //         count++;
    //     }
    //     run();  
    // }
// })

let geminiBox = document.getElementById("geminiBox");
let geminBoxContainer = document.getElementById("geminBoxContainer");
let geminiBoxFlag = false;

geminiBox.addEventListener("click",()=>{
    if(!geminiBoxFlag){
        geminBoxContainer.style.display = "block";
        geminiBoxFlag = true;
    }else{
        geminBoxContainer.style.display = "none";
        geminiBoxFlag = false; 
    }
})    




let apiKey = "AIzaSyBIEScln1EtBCi61VYNPaogJ8U7Fe-LFEA";







































