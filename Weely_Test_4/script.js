document.addEventListener("DOMContentLoaded", () => {
let mobile_Container = document.getElementById("mobile_Container");
let search = document.getElementById("inputBox");
let searchBtn = document.getElementById("searchBtn");

let searchText = "oppo";

searchBtn.addEventListener("click",()=>{
    mobile_Container.innerText = "";
    searchText = search.value;
    if(searchText == ""){
        searchText = "oppo";
    }
    
    run();
})

async function run(){
    let respose = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    let data = await respose.json();
    let phone = data.data;
    console.log(phone[0].slug);
    // console.log(phone.length);

    phone.forEach(mobile => {
        // console.log(mobile.brand);
        let mobile_card = document.createElement("div");
        mobile_card.classList.add("animate__animated","animate__bounceIn");
        mobile_card.style.height = "520px";
        mobile_card.style.width = "350px";
        mobile_card.style.display = "flex";
        mobile_card.style.flexDirection = "column";
        mobile_card.style.alignItems = "center";
        mobile_card.style.justifyItems = "space-evenly";
        mobile_card.style.gap = "10px";
        mobile_card.style.borderRadius = "20px";
        mobile_card.style.boxShadow = "0 0 20px rgb(100,25,230)";
 
        mobile_card.innerHTML = `
        <img class="mt-[20px] w-[250px]" src="${mobile.image}">
        <h2 class="">${mobile.brand} ${mobile.phone_name}</h2>
        <p class="px-4 text-white text-center">There are many variations of passages of available, but the majority have suffered</p>
        <button style="text-shadow: rgb(255, 255, 255) 0px 0 8px;" id="showDetailBtn" class="px-4 py-2 rounded-xl bg-[rgb(100,25,230)] text-white">SHOW DETAILS<button>
        `;
        // console.log(data.data[i].image,data.data[1].brand,data.data[i].phone_name);
        mobile_Container.append(mobile_card);     
    });
 

}   
run();
});

// show button function
function showbtn(e){
    let showDetailBtn = document.querySelectorAll("#showDetailBtn");
// creating div card
    let div_container = document.createElement("div");
    div_container.style.height = "100vh";
    div_container.style.width = "100%";
    div_container.style.display = "flex";
    div_container.style.justifyContent = "center";
    div_container.style.alignItems = "center";
    
    div_container.innerHTML = `
    <div class="w-[425px] h-[570px] flex flex-col items-center gap-3">
        <img src="Image_url" class="w-[160px] h-[212px]">
        <h2 class="text-center">Mobile_Name</h2>
        <h3 class="text-center">Brand_Name</h3>
        
        <p class="text-center">details</p>
        <p class="text-center">Release__Date</p>
        <button class="bg-red-600 px-4 py-2 rounded-lg ">Close</button>
        
    

    </div>` 
    // console.log(showDetailBtn);
}



// ---used code
   // for(let i=1;i<=12;i++){
    //     let mobile_card = document.createElement("div");
    //     mobile_card.style.height = "520px";
    //     mobile_card.style.width = "350px";
    //     mobile_card.style.display = "flex";
    //     mobile_card.style.flexDirection = "column";
    //     mobile_card.style.alignItems = "center";
    //     mobile_card.style.justifyItems = "space-evenly";
    //     mobile_card.style.gap = "10px";
    //     mobile_card.style.borderRadius = "20px";
    //     mobile_card.style.boxShadow = "0 0 20px rgb(100,25,230)";
 
    //     mobile_card.innerHTML = `
    //     <img class="mt-[20px] w-[250px]" src="${data.data[i].image}">
    //     <h2 class="">${data.data[1].brand} ${data.data[i].phone_name}</h2>
    //     <p class="px-4 text-white text-center">There are many variations of passages of available, but the majority have suffered
    //     </p>
    //     <button id="showDetailBtn" class="px-4 py-2 rounded-xl bg-[rgb(100,25,230)] text-white">SHOW DETAILS<button>
    //     `;
    //     // console.log(data.data[i].image,data.data[1].brand,data.data[i].phone_name);
    //     mobile_Container.append(mobile_card);        
    // }
