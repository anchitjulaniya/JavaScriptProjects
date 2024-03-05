let container = document.getElementById("tablebody_container");
let search_field = document.getElementById("search_field");

let filterFunction = (value)=>{
    
    let filteredData = emojiList.filter(e=>{
        if(e.description.indexOf(value) != -1){
            return true;
        }
        
        if(e.aliases.some(e=>e.startsWith(value))){
            // console.log("checkingline12" , e.startsWith(value))
            return true;
        }
        if(e.tags.some(e=>e.startsWith(value))){
            // console.log("checkingline12" ,e.startsWith(value))
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
    container.innerHTML = "";
value.forEach(e=>{
    let new_row = document.createElement("tr");
    let new_emoji = document.createElement("td");
    let new_aliases = document.createElement("td");
    let new_description = document.createElement("td");
    new_emoji.innerText = e.emoji;
    new_aliases.innerText = e.aliases;
    new_description = e.description;

    new_row.append(new_emoji);
    new_row.append(new_aliases);
    new_row.append(new_description);
    
    container.append(new_row);
})
// displayEmoji - 1
}

window.addEventListener("load", ()=>{displayEmoji(emojiList)});

search_field.addEventListener('keyup',(event)=>{
    let value = event.target.value;
    // console.log(value);
    // displayEmoji(value);
    filterFunction(value)
})
