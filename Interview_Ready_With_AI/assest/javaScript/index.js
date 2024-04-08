// document.addEventListener("DOMContentLoaded", function() {
    
//     let aiAssistantHeader = document.getElementById("aiAssistantHeader");
//     let aiAssistantBody = document.getElementById("aiAssistantBody");
//     let aiAssistantContent = document.getElementById("aiAssistantContent")

//     let stateOfAiAssistant = true;

//     aiAssistantHeader.addEventListener("click", ()=>{
//         if (!stateOfAiAssistant) {
//             aiAssistantBody.style.height = "500px"; // Adjust height accordingly
//             aiAssistantContent.style.overflowY = "auto";
//             document.getElementById("upIcon").classList.add("hidden");
//             document.getElementById("downIcon").classList.remove("hidden");
//             stateOfAiAssistant = true;

//         } else {
//             aiAssistantBody.style.height = "0px"; // Adjust height accordingly
//             aiAssistantContent.style.overflowY = "hidden";
//             document.getElementById("downIcon").classList.add("hidden");
//             document.getElementById("upIcon").classList.remove("hidden");
//             stateOfAiAssistant = false;

//         }
//     });
// });
// -------------------------------
document.addEventListener("DOMContentLoaded", function() {
    let aiAssistantHeader = document.getElementById("aiAssistantHeader");
    let aiAssistantBody = document.getElementById("aiAssistantBody");
    let aiAssistantContainer = document.getElementById("aiAssistantContainer");
    
    let aiAssistantContent = document.getElementById("aiAssistantContent");
    let upIcon = document.getElementById("upIcon");
    let downIcon = document.getElementById("downIcon");

    let stateOfAiAssistant = true;

    aiAssistantHeader.addEventListener("click", () => {
        if (stateOfAiAssistant) {
            console.log("true");
            aiAssistantContainer.style.height = "0px";
            aiAssistantContent.style.overflowY = "hidden";
            downIcon.classList.add("hidden");
            upIcon.classList.remove("hidden");
        } else {
            console.log("False");
            aiAssistantContainer.style.height = "500px"; 
            aiAssistantContent.style.overflowY = "auto";
            upIcon.classList.add("hidden");
            downIcon.classList.remove("hidden");
        }
        stateOfAiAssistant = !stateOfAiAssistant; // Toggle the state
    });
});



// dots trail
const dots=[];
const cursor = {
    x:0,
    y:0
};

for(let i=0;i<8;i++){
    const dot = document.createElement("div");
    dot.classList.add("dot");
    // dot.classList.add("w-[10px]","h-[10px]","bg-[rgb(248,90,203)]","")
    document.body.append(dot);
    dots.push(dot);
}


window.addEventListener("scroll",(e)=>{
    console.log("scrollY",window.scrollY);
    cursor.x = e.clientX;
    cursor.y = e.clientY + window.scrollY ;
})

document.addEventListener("mousemove",(e)=>{

    cursor.x = e.clientX;
    cursor.y = e.clientY + window.scrollY ;
    // console.log(window.scrollTop);
})

function draw(){
    let x = cursor.x;
    let y = cursor.y;

    dots.forEach((dot,index)=>{
        const nextDot = dots[index + 1] || 
        dots[0];

        dot.style.left = x + "px";
        dot.style.top = y + "px";

        x += (nextDot.offsetLeft - dot.offsetLeft)*0.5;

        y += (nextDot.offsetTop - dot.offsetTop)*0.5;
    })
}

setInterval(draw,25);