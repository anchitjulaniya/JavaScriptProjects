let detailContainer = document.getElementById("detailContainer");
console.log("hello");
let params = new URLSearchParams(document.location.href);

let uuid = params.get("id"); 
console.log(uuid);
console.log("hello 2");
