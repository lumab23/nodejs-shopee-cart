// create item with the correct subtotal
async function createItem(name, price, quantity) {

    if (!name || typeof name !== 'string') {
        throw new Error("Invalid item name.");
    }
    
    if (typeof price != 'number' || price <= 0) {
        throw new Error("Invalid price.") 
    }

    if (!Number.isInteger(quantity) || quantity <= 0) {
        throw new Error("Invalid quantity.")
    }

    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity
    };
}

export default createItem;



