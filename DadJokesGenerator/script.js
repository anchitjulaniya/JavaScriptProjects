let jokeButton = document.getElementById("button-14");

let jokeBox = document.getElementById("jokeBox");
let loader = document.querySelector(".loader");
const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";

const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
  };
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
// loader.style.display = "none";


jokeButton.addEventListener("click",()=>{
    async function fetchJoke(){
      
      loader.style.display = "block";

        try{      
            jokeButton.disabled = true;
            // jokeBox.innerText = "updating...";

            let response = await fetch(apiURL, options);
            let data = await response.json();
            // console.log(data);
            jokeBox.innerText = data[0].joke;
            jokeButton.disabled = false;

            loader.style.display = "none";

        }
        catch(error){
          console.log(error);
            jokeButton.disabled = false;
            jokeBox.innerText = "Something went wrong";
            loader.style.display = "none";
        }
    }
    fetchJoke();
})