// Practice exercise 3.5

/* 1. Create an object named people that contains an empty array 
that is called friends. */
let people = {
    friends:[]
};


/* 2. Create three variables, each containing an object, that 
contain one of your friend's first names, last names, and an ID 
value. */
let vari1 = {
    frndFirstName1: "Arafja",
    frndLastName1: "Rashid",
    frndId1: "121",
};

let vari2 ={
    frndFirstName2: "Afnan",
    frndLastName2: "Ahmad",
    frndId2: "231",
};

let vari3 = {
    frndFirstName3: "Aras",
    frndLastName3: "Khan",
    frndId3: "342",
};


// 3. Add the three friends to the friend array. 
people.friends.push(vari1, vari2, vari3);


// 4. Output it to the console.
console.log(people);