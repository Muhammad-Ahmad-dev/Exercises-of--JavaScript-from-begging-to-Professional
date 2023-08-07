/*write some code to calculate the hypotenuse of a triangle 
using the Pythagorean theorem when given the values of the 
other two sides. The theorem specifies that the relation 
between the sides of a right-angled triangle is a\2 + b\2 = c\2.*/

// storing the vaule of one side in a variable
let a = window.prompt("value 1");

// storing the vaule of second side in a variable
let b = window.prompt("value 2");

// convert string values in numbers
a = Number(a);
b = Number(b);

/*store hypotenuse value in a varible and perform operation by using arithematic 
operators*/ 
let hypotenuseval = ((a * a) + (b * b)*0.5);

// printing out the final result
console.log(hypotenuseval);