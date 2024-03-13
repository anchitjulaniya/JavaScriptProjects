let d = new Date();
let changeCountry = document.getElementById("changeCountry");
let changeTheme = document.getElementById("changeTheme");
let countryList = 3;
let index = 0;
let country = document.getElementById("country");
let body = document.body;

changeTheme.addEventListener("click",()=>{
    if(index%countryList == 0){
        body.style.backgroundImage = "url(cool-background4.png)"  
        body.style.backgroundSize = "cover"; 

    }else if(index%countryList == 1){
        body.style.backgroundImage = "url(cool-background3.png)"

    }else if(index%countryList == 2){
        body.style.backgroundImage = "url(cool-background2.png)";  }
        index += 1;
})

changeCountry.addEventListener("click",()=>{
    
    if(index%countryList == 0){
        country.innerText = "Delhi";
        d.toLocaleDateString('en-US',{timeZone:'America/Los_Angeles'})
        time();
    }else if(index%countryList == 1){
        country.innerText = "Kolkatta";

    }else if(index%countryList == 2){
        country.innerText = "Bengalore";
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
  
let options = {
    timeZone: 'Europe/Paris',
    year: 'numeric',
    month:'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  },
  formatter = new Intl.DateTimeFormat([], options);
 
// console.log(formatter.format(new Date()));



