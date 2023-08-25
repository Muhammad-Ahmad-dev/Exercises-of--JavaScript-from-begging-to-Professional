// Manipulating an array

// Take the following array: 
const theList = ['Laurence', 'Svekis', true, 35, null, undefined, 
{test: 'one', score: 55}, ['one', 'two']];
/* Manipulate your array using various methods, such as pop(), push
(), shift(), and unshift(), */

// take the following steps:

// step: 01 =>  Remove the first item and the last item.
theList.shift();
theList.pop();

// step: 02 =>  Add FIRST to the start of the array.
theList.unshift("FIRST");

// step: 03 => Assign hello World to the fourth item value.
theList.splice(4, 4, "Hello World!");

// Step: 04 =>  Assign MIDDLE to the third index value.
let thridIndex = theList.splice(2, 2, "MIDDLE");

// step: 04 => Add LAST to the last position in the array.
theList.push("LAST");

// step: 05 =>  Output it to the console.
console.log(theList);
