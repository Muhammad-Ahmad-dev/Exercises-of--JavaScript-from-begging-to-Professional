// Practice exercise 3.4

/* 1. Create a new myCar object for a car. Add some properties, 
including, but not limited to, make and model, and values for a 
typical car or your car. Feel free to use booleans, strings, or 
numbers. */

let myCar = {
    name: "Carola",
    modle: "2903xn",
    manfucturingYear: 2016,
    color: "silver",
    avalable: true, 
};

console.log(myCar);


/* 2. Create a variable that can hold the string value color. This 
variable containing a string value color can now be used to 
reference the property name within myCar. Then, use the variable 
within the square bracket notation to assign a new value to the 
color property in myCar. */
let color = myCar["color"];
myCar.color = "Dark ciyan";

console.log(myCar);


/* 3. Use that same variable and assign a new property string value 
to it, such as forSale. Use the bracket notation once again to 
assign a new value to the forSale property to indicate whether the 
car is available for purchase. */

color = myCar["forsale"];
myCar.forsale = true;
console.log(myCar); 


/* 4. Output make and model into the console. */

console.log(myCar["modle"]);


/* 5. Output the value of forSale into the console. */

console.log(myCar["forsale"]);
