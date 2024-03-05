
let numberOfDivs = 48;
let box = document.getElementById("box");

let color = ()=>{
    let num1 = Math.floor(Math.random()*256);
    let num2 = Math.floor(Math.random()*256);
    let num3 = Math.floor(Math.random()*256); 
    return `rgb(${num1},${num2},${num3})`;
}

for(let i=0;i<numberOfDivs;i++){
    let randomColor = color();
    const div = document.createElement("div");
    const divContent = document.createTextNode(randomColor);
    div.append(divContent);
    box.append(div);

    div.style.height = "180px";
    div.style.width = "300px";
    div.style.border = "2px solid black"
    div.style.borderRadius = "10px";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.fontWeight = "bold";
    div.style.backgroundColor = `${randomColor}`
    
    console.log(div);
}
