const Products = [
    { id: 1, name: "Product-1", price: 100 },
    { id: 2, name: "Product-2", price: 200 },
    { id: 3, name: "Product-3", price: 300 },
    { id: 4, name: "Product-4", price: 400 },
  ];
  
  const productList = document.querySelector(".productList");
  const cartList = document.querySelector(".cartList");
  const cartText = document.querySelector(".cartText");
  const totalPrice = document.querySelector(".totalPrice");
  
  function renderCart(e, count) {
    e.target.parentNode.children[1].innerText = count;
    let selectProd = e.target.parentNode.parentNode.children[0].innerText;
    // console.log(selectProd);
  
    Products.forEach((prod) => {
      if (prod.name === selectProd) {
        prod.count = count;
      }
    });
  
    cartList.innerHTML = "";
    let total = 0
  
    Products.forEach((prod) => {
      if (prod.count > 0) {
        let div = document.createElement("div");
        div.classList.add("cartItem");
        div.innerHTML = `<h4>${prod.name}</h4>
        <p>${prod.count} X ${prod.price}</p>`;
        cartList.appendChild(div);
  
        total += prod.count * prod.price
      }
    });
  
    totalPrice.innerText = `Total = ₹${total}`
    totalPrice.style.backgroundColor = "#29c5e6"
  
  
    // if (total === 0) {
    //   totalPrice.innerHTML = ""
    //   cartText.innerText = "Cart is Empty";
    //   cartText.style.paddingTop = "100px"
    // }
  
    if (cartList.children.length === 0) {
      cartList.appendChild(cartText);
      cartText.innerHTML = "No Product added to the cart";
      cartText.style.paddingTop = "100px"
      totalPrice.innerText = "";
      totalPrice.style.backgroundColor = ""
    }
  }
  
  productList.addEventListener("click", (e) => {
    if (e.target.innerHTML === "+") {
      let count = Number(e.target.parentNode.children[1].innerText);
      count += 1;
      renderCart(e, count);
    } else if (e.target.innerHTML === "-") {
      let count = Number(e.target.parentNode.children[1].innerText);
      if (count > 0) {
        count -= 1;
        renderCart(e, count);
      } else {
        alert("Item is not avaible in cart!");
        return;
      }
    }
  });
  
  function renderProduct() {
    productList.innerHTML = "";
    
    Products.forEach((product) => {
      let listItem = document.createElement("div");
      listItem.classList.add("listItem");
      listItem.innerHTML = `<h4 class="h4">${product.name}</h4>  <p class="p2">₹${product.price}</p>`;
  
      let prodButton = document.createElement("div");
      prodButton.classList.add("prodButton");
      prodButton.innerHTML = `<button class="decremet">-</button>
              <span class="quantity">0</span>
              <button class="increment">+</button>`;
  
      productList.appendChild(listItem);
      listItem.appendChild(prodButton);
    });
  }
  
  window.onload = renderProduct;