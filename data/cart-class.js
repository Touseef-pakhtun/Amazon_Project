class Cart{

    // cart items array to store cart items
    cartItems;

    // key for every item
    #localStorageKey;

    // constructor
    constructor(localStorageKey){
        this.#localStorageKey= localStorageKey;
        this.#loadFromStorage();
    }

    // load cart from the storage
    #loadFromStorage(){
        this.cartItems=JSON.parse(localStorage.getItem(this.#localStorageKey));
        if(!this.cartItems){
            this.cartItems=[{
                productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                quantity:2,
                deliveryOptionId:'1'
                },
                {
                productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
                quantity:1,
                deliveryOptionId:'2'
            }]; 
        }
    }

    // function for to save the cart to local storage
    saveToStorage(){
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }

    // addToCart function
    addToCart(productId){
    let matchingItem;
    this.cartItems.forEach((cartitem)=>{
    if(cartitem.productId===productId){
        matchingItem=cartitem;
    }
    });
    if(matchingItem){
        matchingItem.quantity++;
    }else{
        this.cartItems.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId: '1'
        })
    }
    this.saveToStorage();
    }

    // function to remove the cart item from the cart
    removeFromCart(productId){
        const newCart=[];

        this.cartItems.forEach((cartItem)=>{
            if(cartItem.productId !== productId){
            newCart.push(cartItem);
            }
        });
        this.cartItems=newCart;
        this.saveToStorage();
    }

    // function to update delivery option
    updateDeliveryOption(productId, deliveryOptionId){
        let matchingItem;
        this.cartItems.forEach((cartitem)=>{
        if(cartitem.productId===productId){
            matchingItem=cartitem;
        }
        });
        matchingItem.deliveryOptionId=deliveryOptionId;
        this.saveToStorage();
    }
}

const cart= new Cart('cart-oop');
const businessCart= new Cart('cart-business');

console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart);