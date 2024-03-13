let clock1 = document.getElementById("clock1");
let clock2 = document.getElementById("clock2");
let clock3 = document.getElementById("clock3");

let country1 = document.getElementById("country1");
let country2 = document.getElementById("country2");
let country3 = document.getElementById("country3");

function display(timeZone, clockId, country){
    let time = new Date().toLocaleString("en-US",{timeZone:timeZone});
    let t = time.split(" ")[1]+" "+time.split(" ")[2] ;
    clockId.innerText = t;
}

 setInterval(()=>{
    display("Asia/Kolkata", clock1, "India");
    display("America/New_York", clock2, "America");
    display("Europe/London", clock3, "England");
    
},100)
let i=1;
setInterval(()=>{
    document.getElementById("body").style.backgroundImage = `url(cool-background${i%7}.png)`;
    document.getElementById("body").style.backgroundSize = `cover`;
    document.getElementById("body").style.transition = `1s`;
    
    
    i++;
},1000)

// let i=1;
// let changeTheme = document.getElementById("changeTheme");
// changeTheme.addEventListener("click",()=>{
//     document.getElementById("body").style.backgroundImage = `url(cool-background${i%7}.png)`
//     i++;
// })

