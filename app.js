// Import the necessary functions from utils.js
import { greet, calculatePrice, convertKilometersToMiles, randomNumber } from './utils.js';

// Greet the users: Jenil, Krish, and Dharm, side by side
greet("Jenil", "Krish", "Dharm");

// Calculate the price of a product with a given discount
let productPrice = 100; // Example price in dollars
let discountPercentage = 20; // Example discount percentage
console.log(`The price of the product after a ${discountPercentage}% discount is: $${calculatePrice(productPrice, discountPercentage)}`);

// Convert distance in kilometers to miles
let kilometers = 50; // Example distance
console.log(`${kilometers} kilometers is equal to ${convertKilometersToMiles(kilometers)} miles`);

// Generate a random number between a range
let min = 1, max = 100; // Example range
console.log(`Random number between ${min} and ${max}: ${randomNumber(min, max)}`);
