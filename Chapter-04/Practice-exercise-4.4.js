// Practice exercise 4.4

/* In this exercise, we'll create a Magic 8-Ball random 
answer generator: */

/* 1. Start by setting a variable that gets a random value 
assigned to it. The value is assigned by generating a random 
number 0-5, for 6 possible results. You can increase this 
number as you add more results. */
let score = Math.floor(Math.random()*6);
let responses = "Error on server";



/* 2. Create a prompt that can get a string value input from 
a user that you can repeat back in the final output. */
let info= prompt("Enter your score");

/* 3. Create 6 responses using the switch statement, each 
assigned to a different value from the random number 
generator.*/
switch(score){
    case 0:
        responses = "Your score is Zero!";
        break;
    case 1:
        responses = "Your score is one!";
        break;
    case 2: 
        responses = "Your score is two!";
        break;
    case 3:
        responses = "Your score is three!";
        break;
    case 4:
        responses = "Your score is four!";
        break;
    case 5: 
        responses = "Your score is five!";
    default:
        responses = "Your score is Incorret";
} 

/* 4. Create a variable to hold the end response, which 
should be a sentence printed for the user. You can assign 
different string values for each case, assigning new values 
depending on the results from the random value. */
let finalResult = "Your entered " +info+ ". Here is yuor result\: " +responses;

/* 5. Output the user's original question, plus the randomly 
selected case response, to the console after the user enters 
their question. */
console.log(finalResult);
