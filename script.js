let cart = [];
let totalPrice = 0;

function addToCart(name, price) {
    cart.push({ name: name, price: price });
    totalPrice += price;

    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-list");
    const total = document.getElementById("total");

    cartList.innerHTML = "";

    cart.forEach((item, index) => {
  let li = document.createElement("li");
  li.textContent = item.name + " - $" + item.price + " ";

  // Add remove button
  let removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = () => removeItem(index);

  li.appendChild(removeBtn);
  cartList.appendChild(li);
});

    total.textContent = "Total: $" + totalPrice;
}
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}


