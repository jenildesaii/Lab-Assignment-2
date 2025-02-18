//here it will import the necessary functions from utils.js
import { greet, calculatePrice, convertKilometersToMiles, randomNumber } from './utils.js';

// this will Greet the users: Jenil, Krish, and Dharm, side by side
greet("Jenil", "Krish", "Dharm");

// second function is to calculate the price of a product with a given discount
let productPrice = 100; 
let discountPercentage = 20; // give 20% example discount percentage
console.log(`The price of the product after a ${discountPercentage}% discount is: $${calculatePrice(productPrice, discountPercentage)}`);

// it is converting distance in kilometers to miles
let kilometers = 50; 
console.log(`${kilometers} kilometers is equal to ${convertKilometersToMiles(kilometers)} miles`);

// from 1 to 100 it will generate a random number 
let min = 1, max = 100; // Example range
console.log(`Random number between ${min} and ${max}: ${randomNumber(min, max)}`);
