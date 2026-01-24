// question 1

var num = +prompt("enter a positive number");

var floatNUm = parseFloat(num)
var roundOfValur = Math.round(num)
var floorVlue = Math.floor(num)
var ceilValue = Math.ceil(num)
document.write("<br>  Number: " + floatNUm)
document.write("<br>  round of value: " + roundOfValur)
document.write("<br>  floor value: " + floorVlue)
document.write("<br>  ceil value: " + ceilValue)



// question 2


var num1 = +prompt("enter a negative number");

var floatNUm1 = parseFloat(num1)
var roundOfValur2 = Math.round(num1)
var floorVlue3 = Math.floor(num1)
var ceilValue3 = Math.ceil(num1)
document.write("<br>  Number: " + floatNUm1)
document.write("<br>  round of value: " + roundOfValur2)
document.write("<br>  floor value: " + floorVlue3)
document.write("<br>  ceil value: " + ceilValue3)



// question 3


var num2 = +prompt("enter a number");

var absoluteValue = Math.abs(num2)

alert(" The Absolute value of " + num2 + " is " + absoluteValue)


// question 4



var dice = Math.floor(Math.random() * 6)
var dice1 = Math.floor(Math.random() * 6)


document.write("<br>The random " + dice)
document.write("<br>The random " + dice1)

//  question 5


var toss = Math.floor(Math.random() * 2)
var match = 1
if (toss = 1) {
    alert("tail")
} else { alert("heads") }


// question 6

var randomNum = Math.floor(Math.random() * 100)

document.write("<br>" + randomNum)


// question 7

var weight = parseFloat(+prompt("Enter your weight"))

document.write("<br> The weight of user is " + weight + " kilogram")



// question 8


var secretNum = Math.floor(Math.random() * 10);
var guessNum = +prompt("Guess the number")

if (secretNum == guessNum) {
    alert("Your Guess Won")
} else { alert("try again") }