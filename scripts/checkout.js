import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
import { cart} from '../data/cart.js';
//    import '../data/cart-class.js';
// import '../data/backend-practice.js';

async function loadPage() {
    try{
        // throw 'errorByThrow';
    await loadProductsFetch();

    const value = await new Promise((resolve, reject)=>{
        // throw 'errorbyThrow2';
        loadCart(()=>{
            resolve('value3');
            // reject('error rejected');
            
        });
    });
    
    renderOrderSummary();
    renderPaymentSummary();
    } catch (error){
        console.log(error);
    }
}

loadPage();

let cartQuantity=0;
cart.forEach((cartitem)=>{
    cartQuantity+=cartitem.quantity;
});
// document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
function updateCartQuantity(){
document.querySelector('.return-to-home-link').innerHTML=`${cartQuantity} itmem(s)`;
}
updateCartQuantity();



// Promise.all([
//     loadProductsFetch(),
//     new Promise((resolve)=>{
//     loadCart(()=>{
//     resolve();
//     });
//     })
// ]).then((value) =>{
//     console.log(value);
//     renderOrderSummary();
//     renderPaymentSummary();
// });



// new Promise((resolve)=>{
//     loadProducts(()=>{
//         resolve('value1');
//     });

// }).then((value)=>{
//     console.log(value);
//     return new Promise((resolve) => {
//         loadCart(() =>{
//             resolve();
//         });
//     });

// }).then(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
// });

// loadProducts( () => {
//     loadCart(()=>{
//         renderOrderSummary();
//         renderPaymentSummary();
//     });
// });
