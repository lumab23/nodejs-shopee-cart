// add item to the cart
async function addItem(userCart, item) {
    userCart.push(item);
}

// delete items from the cart
async function deleteItem(userCart, name) {

    if (userCart.length === 0) {
        console.log("The cart is empty!");
        return;
    }
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    } else {
        console.log(`Item "${name}" not found.`)
    }
}

// remove item from the cart (-1)
async function removeItem(userCart, item) {

    if (userCart.length === 0) {
        console.log("The cart is empty!");
        return;
    }
    // find the index of the item
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if (indexFound == -1) {
        console.log(`Item "${item.name}" not found`);
        return;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    if (userCart[indexFound].quantity === 1) {
        userCart.splice(indexFound, 1);
        return;
    }

}

// calculate the total 
async function calculateTotal(userCart) {
    if (userCart.length === 0) {
        console.log("Shopee cart is empty. Total: $0.00");
        return 0;
    }

    const total = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`Shopee cart TOTAL: $${total.toFixed(2)}`);
    return total;
}

async function displayCart(userCart) {
    if (userCart.length === 0) {
        console.log("Your cart is empty!");
        return;
    }

    console.log("Cart items: ")
    userCart.forEach((item, index) => {
        console.log(`${index+1}. ${item.name} - R$ ${item.price.toFixed(2)} | ${item.quantity}x | Subtotal: ${item.subtotal()}`);
    });
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart
}