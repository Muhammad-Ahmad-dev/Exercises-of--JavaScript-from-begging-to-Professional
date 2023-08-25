//while adding more string typed values is allowed, adding any other type of data is not
const warriors = ["Artemisia", "Boudica"];
warriors.push("Zenobia");
console.log(warriors);

// Array Types
// The variables can start off undefined and receive an array value later.
let arrayOfNumbers: number[];
arrayOfNumbers = [4, 8, 15, 16, 23, 42];
console.log(arrayOfNumbers);

// Array and Function Types
/*Array types are an example of a syntax container where function types may need 
parentheses to distinguish what’s in the function type or not.*/
let createString: () =>[];
// Type is a function that returns an array of strings
let stringCreators: (() => string)[];
// Type is an array of functions that each return a string

// Union-Type Arrays
/*You can use a union type to indicate that each element of an array can be one 
of multiple select types.*/

let stringOrArrayOfNumbers: string | number [];
// Type is either a number or an array of strings
let arrayOfStringOrNumbers: (string | number)[];
// Type is an array of elements that are each either a number or a string

// Type is (string | undefined)[]
const namesMaybe = [
    "Aqualtune",
    "Blenda",
    undefined,
];
console.log(namesMaybe);

// Evolving Any Arrays
/*If you don’t include a type annotation on a variable initially set to an empty
array, TypeScript will treat the array as evolving any[], meaning it can
receive any content.*/

//  type: any[]
let values = [];

// Type: string []
values.push("");

// Type: (number | string)[]
values[0] = 0;

let arrayOfArraysNumber: number [][];
arrayOfArraysNumber = [
    [1, 2, 3],
    [4, 5, 6],
    [3, 6, 9],
];

console.log(arrayOfArraysNumber);