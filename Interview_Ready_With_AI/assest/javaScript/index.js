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
    let aiAssistantContent = document.getElementById("aiAssistantContent");
    let upIcon = document.getElementById("upIcon");
    let downIcon = document.getElementById("downIcon");

    let stateOfAiAssistant = true;

    aiAssistantHeader.addEventListener("click", () => {
        if (stateOfAiAssistant) {
            aiAssistantBody.style.height = "0px";
            aiAssistantContent.style.overflowY = "hidden";
            downIcon.classList.add("hidden");
            upIcon.classList.remove("hidden");
        } else {
            aiAssistantBody.style.height = "auto"; // Adjust height accordingly
            aiAssistantContent.style.overflowY = "auto";
            upIcon.classList.add("hidden");
            downIcon.classList.remove("hidden");
        }
        stateOfAiAssistant = !stateOfAiAssistant; // Toggle the state
    });
});
