// Practice exercise 3.2

// 1. Create an empty array to use as a shopping list.
let emptyArray = [];
console.log(emptyArray);

// 2. Add Milk, Bread, and Apples to your list.
emptyArray.push("Milk", "Bread", "Apples");
console.log(emptyArray);

// 3. Update "Bread" with Bananas and Eggs.
let update = emptyArray.splice(1, 1,"Bananas");
console.log(emptyArray);

// 4. Remove the last item from the array and output it into the console.
emptyArray.pop();
console.log(emptyArray);

// 5. Sort the list alphabetically.
emptyArray.push("Apples");
let sortList = emptyArray.sort();
console.log(emptyArray);

// 6. Find and output the index value of Milk.
let indexOf = emptyArray.lastIndexOf();
console.log(indexOf);

// 7. After Bananas, add Carrots and Lettuce.
emptyArray.splice(2, 0, "carrots", "Lettuce");
console.log(emptyArray);

// 8. Create a new list containing Juice and Pop.
let newList = ["Juice", "Pop"];
console.log(newList);

// 9. Combine both lists, adding the new list twice to the end of the first list.
const combineList = emptyArray.concat(newList, newList);


// 10. Get the last index value of Pop and output it to the console.
console.log(newList.lastIndexOf("Pop"));
console.log(combineList);



