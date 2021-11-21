// Personally ,welcomes the user to the calculator applicaition.
alert("Welcome to the JavaScript Calculator application!");
let username = prompt("Please, enter your name:");
alert("Welcome " + username + "!");

// Prompts the user for two numbers and assigns them as variables.
let number1 = prompt("Enter a number:");
let number2 = prompt("Enter a second number:");

// A variable declared to hold the value of the numbers which are added together.
let total;

// Adds the two user entered numbers together and assings the value to the total variable.
addition(number1, number2);

// Checks if the value of the numbers added together is smaller or larger than 10.
bigOrSmallNumber(total);

// Asks if the user would like to add two number again and repeats the process above with a loop.
let response = prompt('Would you like to add two numbers again? Enter "yes" or "no":');
while (response == "yes") {
    number1 = prompt("Enter a number:");
    number2 = prompt("Enter a second number:");
    addition(number1, number2);
    bigOrSmallNumber(total);
    response = prompt('Would you like to add two numbers again? Enter "yes" or "no":');
}

// Returns a thank you message and ends the program if the user does not wish to continue.
if (response == "no") {
    alert("Thank you for using the JavaScript Calculator application!")
}

/* A function which adds two numbers together, updates the value of the total variable, 
and returns the result as an alert.*/
function addition(num1, num2) {
    total = Number(num1) + Number(num2);
    return alert("The sum of your two numbers is: " + total);
}

/* A function which checks if a number is greater than, or less than or equal to 10, 
and provides an alert stating the number is big or small.*/
function bigOrSmallNumber(number) {
    if (number > 10) {
        return alert("That is a big number.");
    } else if (number <= 10) {
        return alert("That is a small number.");
    }
}