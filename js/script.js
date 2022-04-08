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

/* 

// This code has been replaced by the function(filterProducts) above which does a better job

// search.addEventListener("keyup", (e) => {
//     e.preventDefault();
//     const searchValue = search.value.toLowerCase().trim();
//     // alert(search.value);

    
//     for (i = 0; i < storeProducts.length; i++) {
//         if (storeProducts[i].classList.contains(searchValue)) {
//             storeProducts[i].style.display = 'block';
//         } else if (searchValue == "") {
//             storeProducts[i].style.display = 'block';
//         } else {
//             storeProducts[i].style.display = 'none';    
//         }

//     //    if (searchValue == "") {
//     //     storeProducts[i].style.display = 'block';
//     //    }
        
//     }

// })
*/
