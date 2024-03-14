let jokeButton = document.getElementById("button-14");

let jokeBox = document.getElementById("jokeBox");

const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";

const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
  };
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


jokeButton.addEventListener("click",()=>{
    
    async function fetchJoke(){
        try{      
            
            let response = await fetch(apiURL, options);
            let data = await response.json();
            jokeBox.innerText = data[0].joke;


        }
        catch{

        }
    }
    fetchJoke();
})