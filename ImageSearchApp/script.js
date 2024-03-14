const searchButton = document.getElementById("searchButton");

const SearchBox = document.getElementById("SearchBox");

const imageContainer = document.getElementById("imageContainer");

// const id== "578791"
const skey = "IlVfY91Y1fMrS9WoCTVxVLF9_vGg7vObtlzMEgUvdQQ";
const accessKey = "TKIG0GwqnBMIybKYqimoIoqHuTYPNK70VB6lj-cZ39A";
let inputData = "";
let page = 1;
let option = {

}

searchButton.addEventListener("click",()=>{
    
})

async function imageSearch(){
    inputData = SearchBox.value;
    console.log(inputData);
    // const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    // const url = `https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY`
    let response = await fetch(url);
    let data = await response.json();
    

}
imageSearch();





















































