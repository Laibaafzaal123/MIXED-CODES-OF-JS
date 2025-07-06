// Question 1: Variables and Math Expressions
// Write a JavaScript code that declares two variables, x and y, and assigns them the values 10 and 5, respectively. Then, calculate the sum, difference, product, and quotient of x and y and display the results using console.log().
// Declare variables
var x = 10;
var y = 5;
var sum = x + y;
var difference = x - y;
var product = x * y;
var quotient = x / y;
console.log("Sum: " + sum);           // 15
console.log("Difference: " + difference); // 5
console.log("Product: " + product);       // 50
console.log("Quotient: " + quotient);     // 2

// Question 2: if...else Statements and Comparison Operators
// Write a JavaScript code that prompts the user to enter their age and checks if the age is greater than or equal to 18. If true, display "You are an adult." Otherwise, display "You are a minor."
var age = prompt("Enter your age:");
age = +(age);
if (age >= 18) {
  alert("You are an adult.");//25
} else {
  alert("You are a minor.");//5
}

// Question 3: Arrays and for Loops
// Write a JavaScript code that declares an array fruits with the elements "Apple", "Banana", and "Cherry". Then, use a for loop to iterate through the array and display each fruit using console.log().
var fruits = ["Apple", "Banana", "Cherry"];
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);//Apple,Banana,Cherry
}

// Question 4: Concatenating Text Strings and Alerts
// Write a JavaScript code that declares two variables, firstName and lastName, and assigns them the values "John" and "Doe", respectively. Then, concatenate the two variables to form a full name and display an alert box with the message "Hello, " followed by the full name.
var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName);//Hello, John Doe

// Question 5: Nested if Statements and Boolean Logic
// Write a JavaScript code that declares two variables, isAdmin and isLoggedIn, and assigns them the values true and false, respectively. Then, use nested if statements to check if the user is both an admin and logged in. If true, display "Welcome, admin!" using console.log().
var isAdmin = true;
var isLoggedIn = false;
if (isLoggedIn) {
  if (isAdmin) {
    console.log("Welcome, admin!");
  }
}



