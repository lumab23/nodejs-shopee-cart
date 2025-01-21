import * as cartService from './services/cart.js'
import createItem from "./services/item.js";

const myCart = [];

console.log("Welcome to your Shopee Cart!\n")

// created items
const item1 = await createItem("hub usb c", 105.08, 1);
const item2 = await createItem("mouse", 76.98, 2);
const item3 = await createItem("keyboard", 152.51, 3);
// added items
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart,item3);

await cartService.removeItem(myCart, item3);

await cartService.displayCart(myCart);

// calculating total
await cartService.calculateTotal(myCart);