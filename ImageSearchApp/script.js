const searchButton = document.getElementById("searchButton");

const SearchBox = document.getElementById("SearchBox");

const imageContainer = document.getElementById("imageContainer");

// const id = "578791";
const secreteKey = "IlVfY91Y1fMrS9WoCTVxVLF9_vGg7vObtlzMEgUvdQQ";
const accessKey = "TKIG0GwqnBMIybKYqimoIoqHuTYPNK70VB6lj-cZ39A";
let inputData = "";
let page = 1;


searchButton.addEventListener("click",(e)=>{
    e.preventDefault();

    imageSearch();
})


let animate = ["animate__bounceInLeft","animate__bounceIn","animate__bounceInRight"]

async function imageSearch(){
    inputData = SearchBox.value;
    // console.log(inputData);
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    
    let response = await fetch(url);
    let data = await response.json();
    let result = data.results
    console.log(result);
    SearchBox.value = "";
    imageContainer.innerText = "";
    result.map((result,index)=>{
        // console.log(result.urls.small);
        let imgWrapper  = document.createElement("div");
        imgWrapper.style.height = "320px";
        imgWrapper.style.width = "360px";
        imgWrapper.style.borderRadius = "15px";
        imgWrapper.style.overflow = "Hidden";
        
        imgWrapper.style.display = "flex";
        imgWrapper.style.flexDirection = "column"
        imgWrapper.style.color = "white";
        
        let a = document.createElement("a");
        a.href = result.links.download;
        // a.setAttribute = "download"
        a.target = "_blank";

        let img = document.createElement("img");
        img.src = result.urls.small;
        
        img.style.boxShadow = "0px 10px 100px 25px #28283d";
        img.style.height = "250px";
        img.style.width = "360px";
        // img.style.borderRadius = "10px";
        
        let linkContainer = document.createElement("div");
        linkContainer.style.display = "flex";
        linkContainer.style.height = "70x";
        linkContainer.style.width = "360px";
        linkContainer.style.justifyContent = "space-evenly";
        linkContainer.style.paddingTop = "20px";
        linkContainer.style.paddingLeft = "20px";
        
        linkContainer.style.alignItems = "center"
        linkContainer.innerHTML = `<a href="${result.links.html}" target="_blank" ><button class="linkBtn" role="button">Link</button></a>
        <a href="${result.links.download}" download target="_blank" ><button class="DownloadBtn" role="button">Download</button><a>`
        
        imgWrapper.classList.add('animate__animated', `${animate[index%animate.length]}`);
        a.append(img);
        imgWrapper.append(a);
        imgWrapper.append(linkContainer);
        
        imageContainer.append(imgWrapper);
        // imageContainer.style.boxShadow = " 1px 0 6px #ffea63;";
    })

}


















































