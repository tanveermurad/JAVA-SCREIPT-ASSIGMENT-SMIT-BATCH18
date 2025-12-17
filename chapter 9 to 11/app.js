// question 1


var city = prompt("Enter a city name:");
if ( city == "karachi"){
    alert("welcome to city of light");
}

// question 2

var gender = prompt("What is your gender");

if(gender=="male"){
    alert("Good morning! sir");
}

else if(gender=="female"){
    alert("Good morning! Mam");
}

// question 3

var signalColor = prompt("ENTER ROAD TRAFFIC SIGNAL COLOR ");

if(signalColor=="Red"){
    alert("Must Stop");


}
else if(signalColor=="Yellow"){
    alert("Ready to move");


}
else if(signalColor=="green"){
alert("Move Now");
}


// question 4


var remainingFuel = prompt("ENTER REMAINING FUEL In Litre");


if (remainingFuel<= 0.25) {
    alert("Please Refill the fuel in your car")
}


// question 5

var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}

this 

// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");     ////This would not show any alert because b++ will return 82 first then it will increment to 83                  
// }


var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}

// this would work because c was incremented in the above condition

if (c === 13){
    alert("condition 2 is true"); 
}

// it would not work because ++c will increment c to 14 and then compare and it would not be less than 14
if (++c < 14){
    alert("condition 3 is true");
}
//  it work because  c is now 14 from previous increment

if(c === 14){
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

// this would work because totalCost is equal to the sum of laborCost and materialCost
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
// this work
if (true){
    alert("True");
}
// this would not 
if (false){
    alert("False");
}
// it is working but i am not aware why
if("car" < "cat"){
    alert("car is smaller than cat");
}

// question 6
var subject1Mark = Number(prompt("Enter marks obtained in subject 1"));
var subject2Mark = Number(prompt("Enter marks obtained in subject 1"));
var subject3Mark = Number(prompt("Enter marks obtained in subject 1"));
var totalMarks = 300;
var obtainedMarks = subject1Mark + subject2Mark + subject3Mark;
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h1> Marks Sheet </h1> <br> <br>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "% <br>");

if (percentage >= 80){
    document.write("Grade: A-one <br>");
    document.write("Remarks: Excellent <br>");
}

else if (percentage >= 70){
    document.write("Grade: A <br>");
    document.write("Remarks: Good <br>");
}
else if (percentage >= 60){
    document.write("Grade: B <br>");
    document.write("Remarks: You need to improve <br>");
}
else {
    document.write("Grade: Fail <br>");
    document.write("Remarks: Sorry <br>");
}

// Question 7

var secretNum = 7;
var userGuess = Number(prompt("Guess the secret number (between 1 and 10)"));
if ( userGuess === secretNum){
    alert("Bingo! Correct answer");
}
if (userGuess === secretNum + 1 || userGuess === secretNum - 1){
    alert("Close enough to the correct answer");
}
// Question 8

var num = Number(prompt("Enter a number to check if it is divisible by 3"));
if (num % 3 === 0){
    alert(num + " is divisible by 3");
}
else {
    alert(num + " is not divisible by 3");
}


// Question 9
var num = Number(prompt("Enter a number to check if it is even or odd"));
if (num % 2 === 0){
    alert(num + " is even");
}
else {
    alert(num + " is odd");
};



// question 10

var temp = prompt("enter temperature");

if(temp>"40"){
    alert("it is too hot outside")
}
else if(temp > "30"){
    "whether is normal"
}
else if(temp >"20"){
    alert("today wheather is cool")
}
else if(temp> "10"){
    alert("OMG! whether is very cool")

}
// Question 11

var firstNum = number=(prompt("Enter first number to calculate "));
var SecondNum = number=(prompt("Enter second number to calculate "));
var operater = prompt(" enter operater");


if(operater=="+"){
    alert("THE SUM  IS " + firstNum+SecondNum)
}

 else if(operater=="-"){
    alert("THE SUbs  IS " + firstNum-SecondNum)
}

 else if(operater=="/"){
    alert("THE RESULT IS " + firstNum/SecondNum)
}


 else if(operater=="*"){
    alert("THE RESULT IS " + firstNum*SecondNum)
}


else if(operater=="%"){
    alert("THE RESULT IS " + firstNum%SecondNum)
}

