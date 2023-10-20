// Function to get valid input from the user
function getInput(promptText) {
    let value = Number(prompt(promptText));
    while (isNaN(value) || value <= 0) {
        alert("Please enter a valid number.");
        value = Number(prompt(promptText));
    }
    return value;
}

let subtotal = 0;

// Loop through each type of item
for (let i = 1; i <= 3; i++) {
    let itemPrice = getInput(`Please enter the price for item ${i}: `);
    let itemQuantity = getInput(`Please enter the quantity for item ${i}: `);
    
    subtotal += itemPrice * itemQuantity;
}
    let tax=0.055
    let taxAdded=subtotal*tax

console.log(`The subtotal for all items is $${subtotal.toFixed(2)}. Tax added is $${taxAdded}. So, the total price is $${subtotal+taxAdded}`);
