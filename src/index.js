// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  let price = product.querySelector(".price span").innerHTML;
  let quantity = product.querySelector(".quantity input").value;
  let subtotalValue = price * quantity;
  let subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = subtotalValue.toFixed(2);
  return subtotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName("product");
  let subtotalSum = 0;
  for (let i = 0; i < products.length; i++) {
    subtotalSum += updateSubtotal(products[i]);
  }

  // ITERATION 3
  const total = document.querySelector("#total-value span");
  total.innerHTML = subtotalSum.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  const targetParent = target.parentNode;
  targetParent.parentNode.removeChild(targetParent);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeButtons = document.getElementsByClassName("action");
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", removeProduct);
    removeButtons[i].addEventListener("click", calculateAll);
  }
});
