// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// console.log('Importing module');

import * as ShoppingCart from './shoppingCart.js';

// addToCart('bread', 4);

// console.log(totalPrice, totalQuantity);

console.log(ShoppingCart.totalPrice);

import add, { cart } from './shoppingCart.js';

add('pizzas', 3);
add('loaf of bread', 1);
add('jug of milk', 1);

console.log(cart);
