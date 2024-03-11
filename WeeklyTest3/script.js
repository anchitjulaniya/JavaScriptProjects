
let  product1 = document.getElementById("product1");
let  product2 = document.getElementById("product2");
let  product3 = document.getElementById("product3"); 

let cartItemDisplayBox = document.getElementById("cartItemDisplayBox");
let productBox = document.getElementById("productBox");
let data = [];
function DisplayElement(){
    let qty1 = product1_qty;
    let qty2 = product2_qty;
    let qty3 = product3_qty;
    console.log(qty1,qty2,qty3)
    if(Number(qty1.innerText) > 0){
        let div = document.createElement("div");
        div.innerHTML = `
        <div class="rounded-2xl flex px-3 justify-between items-center bg-[#B5C0D0] w-[95%] h-[70px] font-semibold text-[#12372A] text-[1.3rem]">
            <p>Product-1</p>
            <span class="flex">
                <p>0</p>
                <p>&times;</p>
                <p>0</p>
            </span>
        </div>`
        cartItemDisplayBox.append(div);

    }
    else if(Number(qty1) == 0){

        div.remove();
    }
}

// window.addEventListener("load",DisplayElement);
let  price1 = document.getElementById("price1");
let  price2 = document.getElementById("price2");
let  price3 = document.getElementById("price3");

let price1_Dec = document.getElementById("price1_Dec");
let price1_Inc= document.getElementById("price1_Inc");
let product1_qty = document.getElementById("product1_qty");

price1_Dec.addEventListener("click",()=>{
    if(Number(product1_qty.innerText) > 0){ product1_qty.innerText = Number(product1_qty.innerText) - 1;}
    DisplayElement();
})
price1_Inc.addEventListener("click",()=>{
    product1_qty.innerText = Number(product1_qty.innerText) + 1;
    DisplayElement();
})

let price2_Dec = document.getElementById("price2_Dec");
let price2_Inc= document.getElementById("price2_Inc");
let product2_qty = document.getElementById("product2_qty");
price2_Dec.addEventListener("click",()=>{
    if(Number(product2_qty.innerText) > 0){  product2_qty.innerText = Number(product2_qty.innerText) - 1;}
    DisplayElement();
})
price2_Inc.addEventListener("click",()=>{
 product2_qty.innerText = Number(product2_qty.innerText) + 1;
    DisplayElement();
})


let price3_Dec = document.getElementById("price3_Dec");
let price3_Inc= document.getElementById("price3_Inc");
let product3_qty = document.getElementById("product3_qty");
price3_Dec.addEventListener("click",()=>{
    if(Number(product3_qty.innerText) > 0){  product3_qty.innerText = Number(product3_qty.innerText) - 1;}
    DisplayElement();
})
price3_Inc.addEventListener("click",()=>{
    product3_qty.innerText = Number(product3_qty.innerText) + 1;
    DisplayElement();
})

let TotalBox = document.getElementById("TotalBox");
let TotalValue = document.getElementById("TotalValue");
TotalBox.addEventListener("click",()=>{

})

// console.log();


// --------------------------------Method2

productBox.addEventListener("click",(e)=>{
    e.preventDefault();
    let productName = e.target.parentElement.parentElement.innerText;
    let Price_id = e.target.parentElement.parentElement.children[1].id ;
    let price = e.target.parentElement.parentElement.children[1].innerText ;

    let decrement = e.target.parentElement.children[0];
    let increment = e.target.parentElement.children[2];

    let product = {
        name : productName,
        price:price,
        quantity : 0
    }
    console.log(productName);
    

},false)

// console.log(productBox);
// function DisplayElement(){
    
// }

// console.log(product1);
// console.log(cartItemDisplayBox.childNodes);















