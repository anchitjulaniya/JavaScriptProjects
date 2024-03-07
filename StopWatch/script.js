let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

// console.log(start, stop, reset);
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

// console.log(hour, minute, second);
let x = 0;
let idSecond;

let flag = false;
let intervalFunction =  function(){
   idSecond =  setInterval(()=>{
    if(Number(x) <= 9 ){
        x = "0" + x;
        second.innerText = x;
        x = (Number(x) + 1)%60;
    }else{  
        x = x + "";
        second.innerText = x;
        x = (Number(x) + 1)%60;
    }
    },100)
console.log(idSecond);
}

start.addEventListener("click",()=>{
   // start.setAttribute("disabled",true);
   // start.disabled = true;
    if(flag == false){
        intervalFunction();
        flag = true;
    }   
    
})

stop.addEventListener("click",()=>{
    clearInterval(idSecond);
    flag = false;
})

reset.addEventListener("click",()=>{
    // start.setAttribute("disabled",false);
    // console.log(idSecond);
    x = "0";
    clearInterval(idSecond);
    second.innerText = "00";
    minute.innerText = "00";
    hour.innerText = "00";
    flag = false;
})







