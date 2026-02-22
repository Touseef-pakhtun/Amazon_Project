export let cart;
loadFromStorage();
export function loadFromStorage(){
  cart=JSON.parse(localStorage.getItem('cart'));

    if(!cart){
      cart=[]; 
    }
  }

// function for to save the cart to local storage
function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

// addToCart function
export function addToCart(productId){
  let matchingItem;
      cart.forEach((cartitem)=>{
      if(cartitem.productId===productId){
        matchingItem=cartitem;
      }
      });
      if(matchingItem){
        matchingItem.quantity++;
      }else{
        cart.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId: '1'
        })
      }
      saveToStorage();
}

// function to remove the cart item from the cart
export function removeFromCart(productId){
  const newCart=[];

  cart.forEach((cartItem)=>{
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });
  cart=newCart;
  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;
      cart.forEach((cartitem)=>{
      if(cartitem.productId===productId){
        matchingItem=cartitem;
      }
    });
    matchingItem.deliveryOptionId=deliveryOptionId;
    saveToStorage();
}

export function loadCart(fun){

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load',()=>{
    console.log(xhr.response);
    fun();
  });

  xhr.open('GET', 'https://supersimplebackend.dev/cart');
  xhr.send();
}