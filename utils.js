// Function to greet the users with their first and last names
export function greet(firstName1, firstName2, firstName3) {
    console.log(`Welcome ${firstName1}, ${firstName2}, and ${firstName3}`);
}

// Function to calculate the price of a product after a discount
export function calculatePrice(price, discount) {
    return price - (price * (discount / 100)); // Subtract the discount from the price
}

// Function to convert kilometers to miles
export function convertKilometersToMiles(kilometers) {
    return kilometers * 0.621371; // Conversion factor from kilometers to miles
}

// Function to generate a random number between two values
export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Generate random number between min and max
}
