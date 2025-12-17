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
if("car" < "cat"){
    alert("car is smaller than cat");
}





