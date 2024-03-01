    const currDate = new Date();

    const currDay = currDate.getDate();
    const currMonth = currDate.getMonth() + 1; // January is 0, so add 1 to get correct month
    const currYear = currDate.getFullYear();
    const calculate = document.getElementById("calculate");
  
    var BirthYear, BirthMonth, BirthDay;

    document.getElementById("InputDate").addEventListener('change', () => {
        var InputDate = document.getElementById("InputDate").value;
        // console.log(InputDate);
        // console.log(typeof InputDate)

        BirthYear = parseInt(InputDate.substr(0,4));
        BirthMonth = parseInt(InputDate.substr(5,2));
        BirthDay = parseInt(InputDate.substr(8,2));

        // console.log(BirthDay, BirthMonth, BirthYear);
    });
    // console.log(BirthDay, BirthMonth, BirthYear);
 
   const resYear = document.getElementById("resYear");
   const resMonth = document.getElementById("resMonth");
   const resDay = document.getElementById("resDay");
   


    calculate.addEventListener("click",function(){
        console.log(typeof currDay, currMonth, currYear);
        console.log(BirthDay, BirthMonth, BirthYear);

        let resultYear;
        let resultMonth;
        let resultDay;
        if((BirthYear > currYear) || (BirthMonth > currMonth && BirthYear == currYear) || (
            BirthDay > currDay && BirthMonth == currMonth && BirthYear == currYear 
        )){
            resYear.innerText = "Not";
            resMonth.innerText = "Yet";
            resDay.innerText = "Born";  
        }


        resultYear = currYear - BirthYear;
        if(currMonth < BirthMonth){
            resultYear--;
            resultMonth = 12 + currMonth - BirthMonth;
        }
        else{
            resultMonth = currMonth - BirthMonth;
        }
            // 29 02 2024
            // 30 04 2023  // 5 month (+5)
            // -----------
            // 29 09 0000 
            // -----------
        if(currDay < BirthDay){
            resultMonth--;
            resultDay = 30 + currDay - BirthDay;
        }else{
            resultDay =  currDay - BirthDay;
        }
        // console.log(resultDay);
            console.log(resultDay, resultMonth, resultYear);
            resYear.innerText = `${resultYear}`;
            resMonth.innerText = `${resultMonth}`;
            resDay.innerText = `${resultDay}`;

    })
    
    

    
    
    


// console.log(currDay, currMonth+1, currYear);

// console.log(currDate)
// var InputDate = document.getElementById("InputDate").value
// console.log(InputDate)
