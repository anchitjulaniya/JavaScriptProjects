let searchBox = document.getElementById("searchBox");
let searchResult = document.getElementById("searchResult");
let paginationContainer = document.getElementById("paginationContainer");

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
    


let totalPages;

async function fetchMovie(page = 1){ //default argument
    let response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${api_key}&s=${searchBox.value}&page=${page}`);
    // console.log(searchBox.Value);
    let datas = await response.json();
    // console.log(datas);
    let movie = datas.Search;
    totalPages = datas.totalResults;
    // page = totalPages;
    console.log(totalPages);
    // console.log(Array.isArray(movie));
    if(datas.Response === "False"){
        searchResult.innerHTML = `<h2>NO MOVIES</h2>`
    }
    else{
        searchResult.innerText ="";
        movie.forEach(data => {
            // console.log(data);
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
        displayPagination(page,totalPages);
        // paginationContainer.style.display = "flex";
    }
}

// fetchMovie();

function displayPagination(currentPage, totalResults){
    const totalPage = Math.ceil(totalResults / 10); //2
    paginationContainer.style.color = "white"
    paginationContainer.innerHTML = `
      <button class="hover:cursor-pointer border-white border rounded-lg px-2" onclick="fetchMovie(${currentPage - 1})" ${
      currentPage === 1 ? "disabled" : ""
    }>Previous</button>
      <span class="flex items-center justify-center text-white w-[70px] h-[27px] px-2 border-white border rounded-lg">${currentPage} of ${totalPage}</span>
      <button  class="border-white border rounded-lg px-2" onclick="fetchMovie(${currentPage + 1})" ${
      currentPage === totalPage ? "disabled" : ""
    }>Next</button>
    `;
  };








