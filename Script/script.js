var allProducts = document.querySelectorAll(".product li");

var nameProduct = document.querySelector(".showName");

var btnPrice = document.querySelector(".priceProduct");

var result = document.getElementById("totalPrice");
var total = 0;

allProducts.forEach(function (item) {
  item.onclick = function () {
    total += +item.getAttribute("price");

    nameProduct.innerHTML += item.textContent + " , ";
    
    if (nameProduct.innerHTML != "") {
      btnPrice.style.display = "block";
    }
  };
});
btnPrice.onclick = function () {
  result.innerHTML = total;
};

// //////////////////////////////////////////
