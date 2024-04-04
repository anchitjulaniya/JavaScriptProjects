import { GoogleGenerativeAI } from "@google/generative-ai";
    const API_KEY = "AIzaSyBIEScln1EtBCi61VYNPaogJ8U7Fe-LFEA";

    const genAI = new GoogleGenerativeAI(API_KEY);


    let aiAssistantBody = document.getElementById("aiAssistantBody");
    let aiAssistantSendBtn = document.getElementById("aiAssistantSendBtn");
    let aiAssistantInputBox = document.getElementById("aiAssistantInputBox");


let prompt = "How to use You?";

aiAssistantSendBtn.addEventListener("click",()=>{
    let divUser = document.createElement("div");
    divUser.classList.add("flex", "gap-2");
    divUser.innerHTML = `
    <img class="w-[20px] h-[20px] rounded-full hover:cursor-pointer" src="./assest/images/portrait.png">
    <div class=" flex justify-center items-center text-white bg-[rgb(30,31,32)] px-[10px] py-[6px] rounded-lg">${aiAssistantInputBox.value}</div>
    `
    aiAssistantBody.append(divUser);

    if(aiAssistantInputBox.value.trim() !== ""){
        prompt = aiAssistantInputBox.value;
    };

    Search(prompt);
    aiAssistantInputBox.innerText = "";
})


async function Search(prompt){
    
    // For text-only input, use the gemini-pro model

    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const md = window.markdownit(); // Create a new instance of markdown-it
    console.log(md.render(text));

    let divBot = document.createElement("div");
    divBot.style.display = "flex";
    divBot.style.justifyContent = "center";
    divBot.style.marginTop = "5px";
    divBot.style.marginBottom = "15px";
    divBot.classList.add("flex", "gap-2");
    divBot.innerHTML = `
    <img class="w-[20px] h-[20px] rounded-full hover:cursor-pointer rotate-center" src="./assest/images/gemini_favicon.png" alt="" sizes="" srcset="">
    <div class=" text-white bg-[rgb(30,31,32)] px-[20px] py-[10px] rounded-lg">${md.render(text)}</div>
    `
    aiAssistantBody.append(divBot);
}

aiAssistantInputBox.addEventListener("keypress",(e)=>{
    if(e.key === "Enter"){
        e.preventDefault();
        let divUser = document.createElement("div");
        divUser.classList.add("flex", "gap-2");
        divUser.innerHTML = `
        <img class="w-[20px] h-[20px] rounded-full hover:cursor-pointer" src="./assest/images/portrait.png">
        <div class=" flex justify-center items-center text-white bg-[rgb(30,31,32)] px-[10px] py-[8px] rounded-lg">${aiAssistantInputBox.value}</div>
        `
        aiAssistantBody.append(divUser);

        if(aiAssistantInputBox.value.trim() !== ""){
            prompt = aiAssistantInputBox.value;
        };
        Search(prompt);
        aiAssistantInputBox.innerText = "";

        }
})


