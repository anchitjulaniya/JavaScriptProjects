let jokeButton = document.getElementById("button-14");

let jokeBox = document.getElementById("jokeBox");

jokeButton.addEventListener("click",()=>{
    const fetchData = async () => {
        jokeBox.innerText = "updating...";
        const url = `https://hindi-jokes-api.onrender.com/jokes?api_key=a10ac1e53e48027fbc0ed68a618e`
        const response = await fetch(url);
        const data = await response.json();
        jokeBox.innerText = data.jokeContent;
        // console.log(data.jokeContent)
    }
    fetchData();
})