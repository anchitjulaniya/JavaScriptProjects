
let  product1 = document.getElementById("product1");
let  product2 = document.getElementById("product2");
let  product3 = document.getElementById("product3"); 

let cartItemDisplayBox = document.getElementById("cartItemDisplayBox");
let productBox = document.getElementById("productBox");
// window.addEventListener("load",DisplayElement);

productBox.addEventListener("click",(e)=>{

    console.log(e.target.parentElement.parentElement.children[1]);

})

console.log(productBox);
function DisplayElement(){

}









// console.log(product1);
// console.log(cartItemDisplayBox.childNodes);















