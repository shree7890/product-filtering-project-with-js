// element selcetor

const filterButtons = document.querySelectorAll(".btn");
const storeProducts = document.querySelectorAll(".store-product");
// product filtering button
filterButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    storeProducts.forEach((product) => {
      if (filter === "all") {
        product.style.display = "block";
      } else if (product.classList.contains(filter)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

const searchInput = document.getElementById("search");
const productName = document.querySelectorAll(".product-details h2");
// product search in inputfield
searchInput.addEventListener("keyup", function (e) {
  e.preventDefault();
  const searchText = e.target.value.toLowerCase().trim();
  productName.forEach((product) => {
    const productItem = product.firstChild.textContent;
    if (productItem.toLowerCase().includes(searchText)) {
      product.parentElement.parentElement.style.display = "block";
    } else {
      product.parentElement.parentElement.style.display = "none";
    }
  });
});
