// importing cart from local storage
import {addToCart, cart} from '../data/cart.js';
// importing products from products.js
import {products, loadProducts} from '../data/products.js';
// importing formatCurrency function
import {formatCurrency} from './utils/money.js';
// creating html for product using js

loadProducts(renderProductsGrid);


function renderProductsGrid(){
  let productsHTML=``;
  products.forEach((product) => {
        productsHTML+=`
          <div class="product-container">
            <div class="product-image-container">
              <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
              ${product.name}
            </div>

            <div class="product-rating-container">
              <img class="product-rating-stars"
                src="${product.getStarsUrl()}">
              <div class="product-rating-count link-primary">
                ${product.rating.count}
              </div>
            </div>

            <div class="product-price">
              $${formatCurrency(product.priceCents)}
            </div>

            <div class="product-quantity-container">
              <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            ${product.extraInfoHTML()}

            <div class="product-spacer"></div>

            <div class="added-to-cart">
              <img src="images/icons/checkmark.png">
              Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
              Add to Cart
            </button>
          </div>
      `;  
  });
  // inserting productsHTML into products-grid
  document.querySelector('.products-grid').innerHTML=productsHTML; 
  // addtocartquantity interractive update
  function updateCartQuantity(){
    let cartQuantity=0;
    cart.forEach((cartitem)=>{
    cartQuantity+=cartitem.quantity;
    });  
    document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
    return cartQuantity;
  }
  updateCartQuantity();

  // add to cart functionality
    document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
      button.addEventListener('click', () => {
        let productId=button.dataset.productId;
        addToCart(productId);

        // update cart quantity interractively
        updateCartQuantity();

      });
    });
}


