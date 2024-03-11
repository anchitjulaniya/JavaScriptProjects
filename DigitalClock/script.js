let d = new Date();
let changeCountry = document.getElementById("changeCountry");
let countryList = 3;
let index = 0;
let country = document.getElementById("country");

changeCountry.addEventListener("click",()=>{
    
    if(index%countryList == 0){
        country.innerText = "America";
        d.toLocaleDateString('en-US',{timeZone:'America/Los_Angeles'})
        time();
    }else if(index%countryList == 1){
        country.innerText = "China";

    }else if(index%countryList == 2){
        country.innerText = "India";
        time();
    }
    index++;
});

function time(){
    setInterval(()=>{
        const d = new Date();
        hr = d.getHours();
        min = d.getMinutes();
        sec = d.getSeconds();
        if(sec <= 9){
            sec = "0"+sec;
        }
        if(min <= 9){
            min = "0"+min;
        }
        if(hr <= 9){
            hr = "0"+hr;
        }
        clock.innerText = `${hr} : ${min} : ${sec}`;
    
    },1000)
}
time();
  


