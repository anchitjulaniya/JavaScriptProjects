let searchResultContainer = document.getElementById("searchResultContainer");

let searchBtn = document.getElementById("searchBtn");

let url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=200&offset=0';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b8bb314eb8msh5bcb832919161fdp12af72jsn4c6c655daa90',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};
async function fetchCypto(){
try {
	const response = await fetch(url, options);
	const result = await response.json();
	// console.log(result);
    let crypoArray = result.data.coins;
    

    let cardFormat = document.createElement("div");
    cardFormat.style.display= " flex";
    cardFormat.style.gap= "15px";
    cardFormat.style.backgroundColor= "white";
    cardFormat.style.width = "930px";
    cardFormat.style.height = "50px";
    cardFormat.style.borderRadius = "10px"
    cardFormat.style.alignItems = "center";
    cardFormat.style.paddingLeft = "15px";
    cardFormat.style.paddingRight = "15px";
    cardFormat.innerHTML = `
        <span class=" w-[40px] font-bold">S.No.</span>
        <span class="w-[42px] font-bold">ICON</span>
        <span class="pl-[10px] w-[200px] font-bold">NAME</span>
        <span class="pl-[10px] w-[90px] font-bold">SYMBOL</span>
        <span class="pl-[10px] w-[90px] font-bold">Rank</span>
        <span class="pl-[10px] w-[210px] font-bold">MARKET CAP</span>
        <span class="px-2 rounded-lg text-black  font-bold">MORE INFO</span>
        
        `
        searchResultContainer.append(cardFormat);


    // console.log(Array.isArray(resultLength));
    crypoArray.forEach((crypto,index) => {
        // console.log(crypto);

        let name = crypto.name; //used
        let symbol = crypto.symbol; //used
        let color = crypto.color;
        let iconUrl = crypto.iconUrl;  //used
        let uuid = crypto.uuid;
        let price = crypto.price;  //used
        let rank = crypto.rank;  //used
        let marketCap = crypto.marketCap;

        let card = document.createElement("div");
        card.style.display= " flex";
        card.style.gap= "15px";
        card.style.backgroundColor= "white";
        card.style.width = "930px";
        card.style.height = "50px";
        
        card.style.borderRadius = "10px"
        card.style.alignItems = "center";
        card.style.paddingLeft = "15px";
        card.style.paddingRight = "15px";
        // card.style.backgroundColor = `${color}`;
        
        
        
        card.innerHTML = `
        <span class="pl-[10px] w-[40px]">${index+1}</span>
        <img class="w-[42px] h-[42px]" src="${iconUrl}" alt = "">
        <span class="pl-[10px] w-[200px]">${name}</span>
        <span class="pl-[10px] w-[90px]">${symbol}</span>
        <span class="pl-[10px] w-[90px]">Rank: ${rank}</span>
        <span class="pl-[10px] w-[210px]">Cap: $${marketCap}</span>
        
        <button class="px-2 border rounded-lg text-black pl-[10px]">More Info</button>
        
        `
        searchResultContainer.append(card);
        // console.log(name, symbol, color, iconUrl, uuid, price, rank, marketCap);
    });
    

} catch (error) {
	console.error(error);
}
}
fetchCypto();

searchBtn.addEventListener("click",()=>{
    let inputValue =  document.getElementById("inputBox").value;
    // console.log(inputValue);

    url = `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&search=${inputValue}&orderDirection=desc&limit=50&offset=0`;
    searchResultContainer.innerText = "";
    fetchCypto();
})

document.getElementById("ResetBtn").addEventListener("click",()=>{
    url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=100&offset=0';
    searchResultContainer.innerText = "";
    fetchCypto();
})



















