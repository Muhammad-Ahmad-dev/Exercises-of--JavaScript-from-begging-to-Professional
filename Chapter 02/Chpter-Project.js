// Chapter Project 02

// Miles-to-kilometers converter
/*Create a variable that contains a value in miles, convert it to 
kilometers, and log the value in kilometers in the following 
format: 
       The distance of 130 kms is equal to 209.2142 miles
For reference, 1 mile equals 1.60934 kilometers.*/

// creating a variable that contains a value in miles
let distanceInMiles = 130;

// one mile contain the following kilometers
let distanceInKilometers = 1.60934

// logging out performing operation with help of formula
console.log("The distance of "+distanceInKilometers+" miles is equal to " +distanceInKilometers+" Kilometers");


// BMI calculator
/*Set values for height in inches and weight in pounds, then 
convert the values to centimeters and kilos, outputting the 
results to the console:
Output the results. Then, calculate and log the BMI: this is equal to weight 
(in kilos) divided by squared height (in meters). Output the results to the 
console.*/

// storing value in inches
let heightInInches = 40;

// storing value in pounds
let weightInPounds = 30;

// converting inches in centimeters
let centimeters = heightInInches / 2.2046;

// converting pounds in kilo
let kilo = weightInPounds * 2.54;

// logging out both result
console.log(centimeters, kilo);

// calculate and log the BMI
let bmiCalculator = kilo/(centimeters/100 * centimeters/100);
// logging out 
console.log(bmiCalculator);
