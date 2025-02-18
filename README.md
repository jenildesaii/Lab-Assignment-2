Project Overview

This project demonstrates the use of ES6 module imports and exports in JavaScript. The script includes functions to greet users, calculate discounted prices, convert kilometers to miles, and generate random numbers.

Prerequisites

Before running the project, ensure you have the following installed:

Node.js (Check installation using node -v)

Project Structure

lab2-js-frameworks/
│-- app.js          # Main JavaScript file that imports and uses functions from utils.js
│-- utils.js        # Utility functions for greeting, price calculation, conversion, and random numbers
│-- package.json    # Project metadata and module type declaration
│-- README.md       # Documentation for the project

Installation

greet(firstName1, firstName2, firstName3)

Greets three users by name.

Example Output: Welcome Jenil, Krish, and Dharm

calculatePrice(price, discount)

Calculates the final price after applying a discount.

Example Output: The price of the product after a 20% discount is: $80

convertKilometersToMiles(kilometers)

Converts kilometers to miles.

Example Output: 50 kilometers is equal to 31.06855 miles

randomNumber(min, max)

Generates a random number between the given range.

Example Output: Random number between 1 and 100: 57
