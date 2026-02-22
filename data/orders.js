export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order){
    orders.unshift(order);
    saveToLocalStorage(orders);
}

function saveToLocalStorage(order){
    localStorage.setItem('orders',JSON.stringify(order));
}