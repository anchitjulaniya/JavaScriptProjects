const searchButton = document.getElementById("searchButton");

const SearchBox = document.getElementById("SearchBox");

const imageContainer = document.getElementById("imageContainer");



const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
let inputData = "";
let page = 1;
let option = {

}

searchButton.addEventListener("click",()=>{
    
})

async function imageSearch(){
    inputData = SearchBox.value;
    console.log(inputData);
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    let response = await fetch(url);
    let data = await response.json();
    

}
imageSearch();





















































