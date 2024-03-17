let card_container = document.getElementById("card_container");

let select = document.getElementById("select");

let Typesx = {
    bug: "#26de81",
  dragon: "#ffeaa7",
  dark: "#8A8A8A",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
  steel: "#71797E"
}

async function  run(){
    for(let num=1; num<=155;num++)
    {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
    let data = await response.json();
    console.log(data);

    let front_Image_url = data.sprites.other.dream_world.front_default;
    
    let back_Image_url = data.sprites.back_default
    
    let type1 = data.abilities[0].ability.name; 
    let type2 = data.types[0].type.name; 
    // console.log(type1, type2);
    let hp = data.stats[0].base_stat;
    let weight = data.weight;
    let height = data.height;
    // console.log(weight, height,);
    let name = data.name;
    // console.log(name);
    let id = data.id;
    // console.log(id);
    
    let bgColor = Typesx[`${type2}`];
    
    let card = document.createElement("div");
    card.style.height = "300px";
    card.style.width = "240px";
    card.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
    card.classList.add("relative");    
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.padding = "0px 7px";
    card.style.borderRadius = "8px";
    card.style.gap = "10px";
    card.style.justifyContent="center";
    card.style.overflow = "hidden";
    card.style.backgroundColor = "white";
    if(Number(id)<=9){
        id = "#00"+id;
    }else if(Number(id)<=99){
        id = "#0"+id;
    }else if(Number(id)<=999){
        id = "#0"+id;
    }
    card.innerHTML = `
    <div class= "flex justify-center items-center w-full h-full flex-col py-3 px-[7px] gap-[10px] rounded-lg z-10 ">
        <div class="flex gap-16 items-center">
            <p class="text-black font-semibold rounded-2xl bg-white px-3 py-1">${id}</p>
            <p class="text-[rgb(100,100,100)] bg-white rounded-2xl px-3 text-[10px] py-1">HP<span class="text-[16px] text-black font-semibold"> ${hp}</span></p>
        </div>
        <img class="hover:cursor-zoom-in w-[160px] h-[130px] drop-shadow-2xl duration-300 hover:scale-125 hover:ease-in-out" src="${front_Image_url}" alt="pokemon_Image">
        <h2 class="text-black font-bold text-center text-xl capitalize">${name}</h2>

        <div class="type w-full flex items-center font-semibold  capitalize justify-evenly text-[14px]">
            <p class="px-3 py-1 text-white font-semibold rounded-xl bg-[${bgColor}]">${type1}</p>
            <p class="px-3 py-1 text-white font-semibold rounded-xl bg-[${bgColor}]">${type2}</p>
        </div>

        <div class="flex items-center  justify-evenly items-center w-full text-[11px] text-[rgb(100,100,100)]">
        <p>Height: <span class=" text-[14px] text-black font-semibold">${height}</span></p>
        <p>Weight: <span class=" text-[14px] text-black font-semibold">${weight}</span></p>
        </div>

    </div>

    <div class="absolute -left-[20px] -top-[150px] drop-shadow-xl rounded-full -z-3 bg-[${bgColor}]  w-[280px] h-[280px]"></div>
    `

    card_container.append(card);
    
    }
}
run();

























// extra code
// let card_hp = document.createElement("p");

// // let Front_Img = document.createElement("img");
// Front_Img.src = front_Image_url;
// document.body.append(Front_Img);

// let card_name = document.createElement("h2");
// card_name.innerText = name;



// let Back_Img = document.createElement("img");
// Back_Img.src = back_Image_url;
// document.body.append(Back_Img);

