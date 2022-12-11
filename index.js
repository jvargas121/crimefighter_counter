// Initialize the count as 0
//Listen for CLICKS on the Increment Button
//Increment the count vraiable when the button is clicked
// Change the count-el in the HTML to reflect the new count

 /*function increment() {
    console.log("The button was clicked!")
 } */

 // Refactor the code below into a function. Countdown from 5-1
 
 /*
   function countdown() {
      console.log(5)
      console.log(4)
      console.log(3)
      console.log(2)
      console.log(1)
   }

   countdown()
   countdown()
*/

//Create a function (you decide the name) that logs out the number 42 to the console
//Call/Invoke the function

/*
   function addMath() {
      console.log(42)
   }

   addMath()
*/

//Create a function that logs out the sum of all the lap times

/*
   let lap1 = 34;
   let lap2 = 33;
   let lap3 = 36;

   function totalTime() {
      console.log(lap1 + lap2 + lap3);
   }

   totalTime();
*/

// Create a function that increments the lapsCompleted variable with one
// Run it three times

/*
   let lapsCompleted = 0;

   function incrementLap() {
      lapsCompleted = lapsCompleted + 1;
   }

   incrementLap();
   incrementLap();
   incrementLap();

   console.log(lapsCompleted);
*/


// document.getElementById("count").innertext = 0;

// let count = 0;
// count = count + 1;
// console.log(count)

// Steps Below
   // Initialize the count as 0
   // Listen for clicks on the increment button
   // Increment the count varibale when the button is clicked (log it out)
   // Change the count-el in the HTML to reflect the new count


// Initialize the count as 0
/*
   let countEl = document.getElementById("count-el"); //When you input text in parenthesis you are passing an argument, giving the function data to work with. In this case you are identifying the elements Id
   console.log(countEl);

   let count = 0;

   // Listen for clicks on the increment button
   function increment() {
      // Increment the count varibale when the button is clicked (log it out)
      count = count + 1;
      // Change the count-el in the HTML to reflect the new count
      countEl.innerText = count;
      console.log(count);
   }

   increment();
*/

// Grab the count-el element, store it in a countEl variable

/*
   let countEl = document.getElementById("count-el");

   let count = 0;

   function increment() {
      count = count + 1;
      countEl.innerText = count;
      console.log(count);
   }

   increment();
*/

// 1. Create a function, save(), which logs out the count when it's called
/*
   let countEl = document.getElementById("count-el");
   let count = 0;

   function increment() {
      count += 1;
      countEl.innerText = count;
      console.log(count);
   }


   function save() {
      console.log(count);
   }

   save();
*/

// Let's write your first string variable

/*
let username = "Josef";

console.log(username);

// Create a variable, message, that stores the string: "You have three new notifications"

let message = "You have three new notifications";

console.log(message + ", " + username + "!");

let messageToUser = message + ", " + username + "!";

console.log(messageToUser);
*/

// Create two variables, name and greeting. The name and variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

/*
let myName = "Josef!";

let greeting = "Hi my name is "

// Create a third variable, myGreeting, that concatenates the two strings
// Log myGreeting to the console

let myGreeting = greeting + myName;

console.log(myGreeting);

let points = 4;
let bonusPoints = "10";

let totalPoints = points + bonusPoints;

console.log(totalPoints);
*/

// Grab the welcome-el paragraph adn store it in a variable called welcomeEl
/*
let welcomeEl = document.getElementById("welcome-el");
// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
let myName = "Josef Vargas!";
let greeting = "Welcome back, ";
// Render the welcome message using welcomeEl.innertext
welcomeEl.innerText = greeting + myName;

// Add an emoji to the end! 
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

welcomeEl.innerText += " 👋"
*/

// 1. Grab the save-el paragraph and store it in a vraible called save-el
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
   count += 1;
   countEl.textContent = count;
}


function save() {
   // 2. Create a varaible that contains both the count and the dash seperator
   let saveCount = count + " - ";
   // 3. Render the variable in the saveEl using innerText
   saveEl.textContent += saveCount;
   // 4. Set the counter to 0
   countEl.textContent = 0;
   // 5. Set the count to 0 as well when each increment is saved
   count = 0;
}