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

// Imports are not copies of the export, they are live connection

/*
/////////////////////////////////////////
// LECTURE 2: TOP LEVEL AWAIT
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

// const lastPost = getLastPost();
// console.log(lastPost);

// not clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

/*
////////////////////////////////
// MODULE PATTERNS

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizzas', 2);

console.log(ShoppingCart2);
*/

////////////////////////////////
// INTRO TO NPM

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: [{ loggedIn: true }],
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const rylan = new Person('Rylan');

console.log('Rylan' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));
