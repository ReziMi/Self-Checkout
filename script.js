function validateInput(value) {
    return !isNaN(value) && value > 0;
}

function getInput(id) {
    let value = Number(document.getElementById(id).value);
    if (!validateInput(value)) {
        alert("Please enter a valid positive number.");
        document.getElementById(id).focus();
        throw new Error("Invalid input"); 
    }
    return value;
}

function calculate() {
    let subtotal = 0;

    try {
        for (let i = 1; i <= 3; i++) {
            let itemPrice = getInput(`price${i}`);
            let itemQuantity = getInput(`quantity${i}`);
            
            subtotal += itemPrice * itemQuantity;
        }

        let tax = 0.055;
        let taxAdded = subtotal * tax;

        let resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `The subtotal for all items is $${subtotal.toFixed(2)}. Tax added is $${taxAdded.toFixed(2)}. So, the total price is $${(subtotal + taxAdded).toFixed(2)}`;
    } catch (error) {
        
    }
}
