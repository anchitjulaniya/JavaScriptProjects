let searchBox = document.getElementById("searchBox");
let searchResult = document.getElementById("searchResult");


let api_key = "e48a43b1";

async function run(){
   
    let response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${api_key}`);
    let data = await response.json();
    console.log(data);

    let movieCard = document.createElement("div");
    movieCard.style.boxShadow = "rgba(255, 250, 250, 0.15) 1.95px 1.95px 2.6px";
    movieCard.style.width = "250px";
    movieCard.style.height = "430px";
    movieCard.style.display = "flex";
    movieCard.style.flexDirection = "column";
    movieCard.style.alignItems = "center";
    movieCard.style.gap = "10px";
    movieCard.style.border = "solid 2px black";
    movieCard.style.borderRadius = "10px";
    movieCard.style.overflow = "hidden";
    movieCard.style.position = "relative"
    
    // console.log(data.Poster);
    movieCard.innerHTML = `
    <img class="w-[247px] h-[365px]" src="${data.Poster}">
    <p id="rating" class="absolute top-[335px] bg-black rounded-lg px-2 py-1 -left-[2px] flex gap-2 text-[rgb(234,179,8)]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
        </svg>
        ${data.Ratings[0].Value}
    </p>
    <div class="W-full h-full flex items-center">
        <h2 style="text-shadow: #FC0 1px 0 10px;" id="name" class="flex flex-wrap text-white font-bold Capitalize">${data.Title}</h2>
    
    </div>
    
    `
    searchResult.append(movieCard)
}

run();
// searchBox.addEventListener("keyup",()=>{


// })


// unused code
// <button class="flex gap-2 border px-[50px] py-[12px] rounded-lg text-white">
/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
<path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
</svg>Trailer</button> */

// <button class="bg-[rgb(44,44,44)] text-blue-500 font-semibold px-[50px] py-[12px] rounded-lg hover:text-blue-600">Watch Options</button>