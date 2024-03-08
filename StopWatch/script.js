let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

// console.log(start, stop, reset);
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let millisecond = document.getElementById("millisecond");

// console.log(hour, minute, second);
let num = 0;
let idSecond;

let sec = 0,min = 0, hr= 0 ;

let flag = false;
let intervalFunction =  function(){
    idSecond =  setInterval(()=>{
        
        // Method-1
        // sec = num%60;
        // // second
        // if(Number(sec) <= 9 ){
        //     sec = "0" + sec;
        //     second.innerText = sec;            
        // }else{  
        //     sec = sec + "";
        //     second.innerText = sec;
        // }
        // // minute
        // min = parseInt(num/60);
        // if(Number(min) <= 9){
        //     min = "0"+min;
        //     minute.innerText = min;
        // }else{
        //     // hour
        //     if(Number(min) > 59){
        //         hr = parseInt((num/60)/60);
        //         if(Number(hr) <= 9){
        //             hr = "0"+hr;
        //             hour.innerText = min;
        //         }else{
        //             hour.innerText = hr;
        //         }
        //         min = parseInt(Number(num)/60);
        //         minute.innerText = min;
        //     }
        //     else{
        //         minute.innerText = min;
        //     }
        // }
        // num++;

        // ------Method2
        if(num>99){
            num = 0;

            if(num > 9){
                millisecond.innerText = num;
            }else{
                millisecond.innerText = "0"+num;
            }
            
            sec++;
            if(sec > 9){
                second.innerText = sec;
            }else{
                second.innerText = "0"+sec;
            }
            if(sec > 59){
                sec = 0;
                min++;
                if(min > 9){
                    minute.innerText = min;
                }else{
                    minute.innerText = "0"+min;
                }
                if(min > 59){
                    min = 0;
                    hr++;
                    if(hr > 9){
                        hour.innerText = hr;
                    }else{
                        hour.innerText = "0"+hr;
                    }
                }
                
            }
        }
        else{
            if(num > 9){
                millisecond.innerText = num;
            }else{
                millisecond.innerText = "0"+num;
            }
        }
        // console.log(num, min, hr);
        num++;
    },10)
// console.log(idSecond);
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
    num = 0;
    clearInterval(idSecond);
    millisecond.innerText = "00";
    second.innerText = "00";
    minute.innerText = "00";
    hour.innerText = "00";
    flag = false;
})





// let x = 10

// console.log("Hello");
// let set = function(){
//     setTimeout(()=>{       
//         console.log(x + 1)   
//     },1000)
// }

// let set2 = function(){
//     setTimeout(()=>{       
//         console.log(x - 1)
//     },1000)
// }
// set();
// set2();