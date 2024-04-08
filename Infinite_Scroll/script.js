let apikey = "YmW88eLJ2MS4Jev7spe-yvfG5VFk5gESfy5ED61fgww";

count = 12;

async function displayImages(){
    let response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`);
    let data = await response.json();
    console.log(data); 
   for(let imageData of data){
        let a = document.createElement("a");
        a.href = `${imageData.links.html}`
        a.classList.add("hover:shadow-2xl")
        a.setAttribute("target","_blank")
        a.innerHTML = `
        <img class="h-[400px] rounded-lg shadow w-[290px]" src="${imageData.urls.small}" alt="">
        `
        imageContainer.append(a);
    }
}
console.log(window.scrollY);
console.log(window.innerHeight);
console.log(document.body.offsetHeight);
window.addEventListener("scroll",()=>{
    console.log("scrollY",window.scrollY);
    // console.log("innerHeight",window.innerHeight);
    // console.log("offsetHeight",document.body.offsetHeight);
    if(window.scrollY + window.innerHeight + 200 >= document.body.offsetHeight ){
        displayImages();
    }
})


displayImages();