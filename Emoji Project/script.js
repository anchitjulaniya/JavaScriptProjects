
let search_field = document.getElementById("search_field");
let emoji_container = document.getElementById("emoji_container");
let filterBox = document.getElementById("filterBox");


filterBox.addEventListener("click",(e)=>{
    e.preventDefault();
    filterFunction(e.target.id.toLowerCase());
    // console.log(e.target.id);

})

// 

let filterFunction = (value)=>{
    // console.log(value);
    let filteredData = emojiList.filter(e=>{
        if(e.description.indexOf(value) != -1){
            return true;
        }
        
        if(e.aliases.some(e=>e.startsWith(value))){
            return true;
        }
        if(e.tags.some(e=>e.startsWith(value))){
            return true;
        }    
    })
    
    if(value.trim() == ""){
        displayEmoji(emojiList);
    }
    else{
    displayEmoji(filteredData);
    }
}

function displayEmoji(value = emojiList){
    emoji_container.innerHTML = "";
value.forEach(e=>{
   
    let newEmojiContainer = document.createElement("div");

    let emoji_box = document.createElement("span");
    // emoji_box.setAttribute("title","Copied to clipboard");
    // emoji_box.setAttribute("data-toggle","tooltip");
    emoji_box.style.width = "160px";
    emoji_box.style.fontSize = "100px";
    emoji_box.innerText = e.emoji;
    emoji_box.classList.add('animate__animated', 'animate__backInDown');
    emoji_box.style.cursor = "pointer";
    
    emoji_container.append(emoji_box)

})

}

window.addEventListener("load", ()=>{displayEmoji(emojiList)});

search_field.addEventListener('keyup',(event)=>{
    let value = event.target.value;
    // console.log(value);
    // displayEmoji(value);
    filterFunction(value)
})
emoji_container.addEventListener("click",(e)=>{
     navigator.clipboard.writeText(e.target.innerText);
    


     alert("Copied to clipboard");
    console.log( e.target);
})
