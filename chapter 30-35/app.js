// question 1


 var currentDate = new Date();
console.log(currentDate);



// question 2
var months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];


var currentMonth = currentDate.getMonth(1);

console.log(months[currentMonth]);


// question 3
var days = ["sun","mon","tue","wed","thu","fri","sat"];
var currentDay = currentDate.getDay(0);
console.log(days[currentDay]);


// question 4


var currentDay = currentDate.getDay();
var message = "It's Fun day"; 
if (currentDay === 0 || currentDay === 6) {
    alert(message);
};

// question 5
var checkDate = new Date();

if (checkDate < 16) {
    console.log("First fifteen days of the month");
}else {
    console.log("Last days of the month");
}

// question 6

Time = new Date();
var milliseconds = Time.getTime(1970);
var minutes = milliseconds / (1000 * 60);
console.log("Current Date: " + Time);
console.log("Elapsed milliseconds since January 1, 1970: " + milliseconds);
console.log("Elapsed minutes since January 1, 1970: " + minutes);

// question 7

var currentHour = Time.getHours();
if (currentHour < 12) {
    console.log("It's AM");
} else {
    console.log("It's PM");
}

// question 8


var laterDate = new Date("December 31, 2020");
console.log(laterDate);

// question 9 
var ramadanStart = new Date("March 1, 2025");
var currentDate = new Date();
var timeDifference = currentDate.getTime() - ramadanStart.getTime();
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
console.log(daysPassed + " days have passed since June 18, 2015.");

// question 10
var referenceDate = new Date("January 1, 2015");
var currentDate = new Date();
var timeDifference = currentDate.getTime() - referenceDate.getTime();
var secondsPassed = Math.floor(timeDifference / 1000);
console.log(secondsPassed + " seconds have passed since January 1, 2015.");

// question 11
var currentDate = new Date();
var currentHour = currentDate.getHours();
var hourDifference=currentDate.setHours(currentHour - 1);
console.log("Current Date: " + currentDate);
console.log("1 hour ago, it was " + currentDate);

//  question 12
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var yearDifference = currentDate.setFullYear(currentYear - 100);
alert("Current Date: " + currentDate);
alert("100 years back, it was " + currentDate);


// question 13

var userAge = prompt("Enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - userAge;
console.log("Your age is: " + userAge);
console.log("Your birth year is: " + birthYear);

// question 14
var customerName = "Tanveer";
var currentMonth = new Date().getMonth();
var numberPerUnit = 410;
var chargesPerUnit = 16;
var netAmountPayable = numberPerUnit*chargesPerUnit;
var latePaymentSurcharge = 350;
var grossAmountPayable =netAmountPayable+latePaymentSurcharge;


document.write("Customer Name: "+customerName);
document.write(" <br> Month: "+currentMonth);
document.write(" <br> Number of Unit: "+numberPerUnit);
document.write("<br> Net Amount Payable(within due Date): "+chargesPerUnit);
document.write(" <br> late payment Surcharge: "+latePaymentSurcharge);
document.write("<br> Gross Amount Payable(Ater due date): "+grossAmountPayable);






