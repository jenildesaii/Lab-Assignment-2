//this Function to greet the users with their group members
export function greet(firstName1, firstName2, firstName3) {
    console.log(`Welcome ${firstName1}, ${firstName2}, and ${firstName3}`);
}

// Function to calculate the price of a product after a discount
export function calculatePrice(price, discount) {
    return price - (price * (discount / 100)); 
}

// Function to convert kilometers to miles
export function convertKilometersToMiles(kilometers) {
    return kilometers * 0.621371; 
}

//this is the Function to generate a random number between two values
export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
