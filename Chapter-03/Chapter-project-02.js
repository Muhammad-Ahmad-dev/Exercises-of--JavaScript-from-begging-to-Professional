// Chapter project 02

// Company product catalog
/* In this project, you will implement a data structure for a 
product catalog and create queries to retrieve data. */

// 1. Create an array to hold an inventory of store items.
let inventoryOfStore = [];

/* 2. Create three items, each having the properties of name, 
model, cost, and quantity. */
let item1 = {
    name: "iPhone",
    modle: "14 pro max",
    cost: "999$",
    quantity: 10,
};

let item2 = {
    name: "MacBook",
    modle: "Air13-inch with M2 chip",
    cost: "1099$",
    quantity: 4,
};

let item3 ={
    name: "iPad  Pro",
    modle: "11-inch, Apple M2 chip",
    cost: "799$",
    quantity: 6,
};

/* 3. Add all three objects to the main array using an array 
method, and then log the inventory array to the console. */
inventoryOfStore.push(item1, item2, item3);

 /* 4. Access the quantity element of your third item, and log it to 
 the console. */ 
console.log(inventoryOfStore);
console.log(inventoryOfStore[2].quantity);
