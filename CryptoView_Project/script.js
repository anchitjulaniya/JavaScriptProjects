
// url = let response = fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr");


async function x(){
    let response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr");
    let data = await response.json();
    console.log(response);
}
x();