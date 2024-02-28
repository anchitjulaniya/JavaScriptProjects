    const currDate = new Date();

    const currDay = currDate.getDate();
    const currMonth = currDate.getMonth() + 1; // January is 0, so add 1 to get correct month
    const currYear = currDate.getFullYear();
    
    document.getElementById("InputDate").addEventListener('change', () => {
        var InputDate = document.getElementById("InputDate").value;
        // console.log(InputDate);
        // console.log(typeof InputDate)

        var BirthYear = parseInt(InputDate.substr(0,4));
        var BirthMonth = parseInt(InputDate.substr(5,2));
        var BirthDay = parseInt(InputDate.substr(8,2));

        // console.log(BirthDay, BirthMonth, BirthYear);
    }); 
    var resYear = 0;
    var resMonth = 0;
    var resDay = 0;

    if((BirthYear > currYear) || (BirthMonth > currMonth && BirthYear == currYear) || (
        BirthDay > currDay && BirthMonth == currMonth && BirthYear == currYear 
    )){
        resYear += "Not";
        resMonth += "Yet";
        resDay += "Born";
    }

    

    
    
    


// console.log(currDay, currMonth+1, currYear);

// console.log(currDate)
// var InputDate = document.getElementById("InputDate").value
// console.log(InputDate)
