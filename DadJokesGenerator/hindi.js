let jokeButton = document.getElementById("button-14");

let jokeBox = document.getElementById("jokeBox");
let loader = document.querySelector(".loader");

jokeButton.addEventListener("click",()=>{
    loader.style.display = "block";
    const fetchData = async () => {
        try{
            jokeButton.disabled = true;
            // jokeBox.innerText = "updating...";
            const url = `https://hindi-jokes-api.onrender.com/jokes?api_key=a10ac1e53e48027fbc0ed68a618e`
            const response = await fetch(url);
            const data = await response.json();
            jokeBox.innerText = data.jokeContent;
            jokeButton.disabled = false;

            loader.style.display = "none";
            // console.log(data.jokeContent)
        }
        catch(error){
            jokeButton.disabled = false;
            jokeBox.innerText = "Something went wrong";
            loader.style.display = "none";
        }
    }
    fetchData();
})