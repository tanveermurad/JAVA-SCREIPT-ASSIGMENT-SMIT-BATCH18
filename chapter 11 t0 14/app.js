

//  question 2

var intNum1 = +prompt("Enter first integer");
var intNum2 = +prompt("Enter second integer");

if (intNum1 > intNum2) {
    alert(intNum1 + " is larger than " + intNum2);
} else if (intNum2 > intNum1) {
    alert(intNum2 + " is larger than " + intNum1);
} else {
    alert("Both numbers are equal");
}



// question 3

var num = + prompt("Enter a number to check if it is positive, negative, or zero");

if (num > 0) {
    alert("It is positive number ")
} else if (num < 0) {
    alert("It is negative number ")
} else {
    alert("it is zero")
}


// question 4
var char = prompt("Enter a single character to check if it is a vowel");

if (char === 'a' || char === 'e' || char == 'i' || char === 'o' || char === "u") {
    alert(char + " is a vowel");
} else {
    alert(char + " is not a vowel");
}


// question 5
var password = "password123";
var userInput = prompt("Enter your password");
if (userInput === "") {
    alert("Please enter your password");
} else if (userInput === password) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}



// question 6


// edr else block if block k ander tha that why it dd not workd properly
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";

} else {
    greeting = "Good evening";
}


// question 7

var time = +prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM)");

if (time >= 0o00 && time < 1200) {
    alert("Good Morning!");

} else if (time >= 1200 && time < 1700) {
    alert("Good After Noon")
} else if (time >= 1700 && time < 2100) {
    alert("Good evening")
} else if (time >= 2100 && time < 2359) {
    alert("good night")
}