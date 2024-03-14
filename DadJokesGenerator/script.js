let jokeButton = document.getElementById("button-14");

let jokeBox = document.getElementById("jokeBox");
let loaderContainer = document.querySelector(".loaderContainer");

const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";
jokeBox.style.display = "none";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
// loaderContainer.style.display = "none";

jokeButton.addEventListener("click", () => {
  loaderContainer.style.display = "flex";
  jokeBox.style.display = "none";
  async function fetchJoke() {
    // loaderContainer.style.display = "block";
    try {
      jokeButton.disabled = true;
      // jokeBox.innerText = "updating...";
      
      let response = await fetch(apiURL, options);
      let data = await response.json();
      // console.log(data);
      jokeBox.innerText = data[0].joke;
      jokeButton.disabled = false;
      jokeBox.style.display = "block";
      loaderContainer.style.display = "none";

      // loaderContainer.innerText = ""
    } catch (error) {
      console.log(error);
      jokeButton.disabled = false;
      jokeBox.innerText = "Something went wrong";
      loaderContainer.style.display = "none";
      jokeBox.style.display = "block";
    }
  }
  fetchJoke();
  // loaderContainer.style.display = "none";
});
