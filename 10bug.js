// Sample cart array with quantities
let cart = [2, 3, 1, 4];

// Function to double the quantity of each item in the cart array
function doubleQuantities(cartArray) {
    // Iterate through each item in the cart array
    for (let i = 0; i < cartArray.length; i++) {
        // Double the quantity of the current item
        cartArray[i] *= 2;
    }
    // Return the modified cart array
    return cartArray;
}

// Call the function and update the cart array
cart = doubleQuantities(cart);

// Output the updated cart array
console.log(cart); // Output: [4, 6, 2, 8]