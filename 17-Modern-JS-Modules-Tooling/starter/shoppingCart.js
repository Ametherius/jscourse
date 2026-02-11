console.log('Exporting module');

const shippingCost = 10;
export const cart = [];

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}

const totalPrice = 237;
const totalQuantity = 10;

export { totalPrice, totalQuantity };
