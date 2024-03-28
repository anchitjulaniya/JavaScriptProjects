let searchBox = document.getElementById("searchBox");
let searchResult = document.getElementById("searchResult");

let page = 1;
let api_key = "e48a43b1";


const debounce  = (fun, delay)=>{
    let timer;

    return ()=>{
        timer && clearTimeout(timer);

        timer = setTimeout(()=>{
            fun();
        },delay)
    }
}

searchBox.addEventListener("input",debounce(fetchMovie,1000))



async function fetchMovie(){
    let response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${api_key}&s=${searchBox.Value}&page=${page}`);
    let datas = await response.json();
    console.log(datas.Search);
    let movie = datas.Search;
    // console.log(Array.isArray(movie));
    if(datas.Response === "False"){
        searchResult.innerHTML = `<h2>NO MOVIES</h2>`
    }
    else{
        movie.forEach(data => {
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
            ${data.Year}
        </p>
        <div class="W-full h-full flex items-center">
            <h2 style="text-shadow: #FC0 1px 0 10px;" id="name" class="flex flex-wrap text-white font-bold Capitalize">${data.Title}</h2>
        
        </div>
        `
        searchResult.append(movieCard)
        });
    }
}

fetchMovie();



// unused code
// <button class="flex gap-2 border px-[50px] py-[12px] rounded-lg text-white">
/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
<path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
</svg>Trailer</button> */

// <button class="bg-[rgb(44,44,44)] text-blue-500 font-semibold px-[50px] py-[12px] rounded-lg hover:text-blue-600">Watch Options</button>