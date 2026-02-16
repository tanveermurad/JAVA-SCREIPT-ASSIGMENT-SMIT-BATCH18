// question 1

function currentTime() {
    var CurrentDate = new Date()
    return CurrentDate;
}
console.log(currentTime());


// question 2
function greetUser() {
    var UserInput = prompt("Enter Your Name");
    var greeting = "Hello, " + UserInput + "! Welcome!";
    alert(greeting);
}

greetUser();
// question 3
function sumofTwonum() {
    var UserInput = prompt("Enter First Number to Add");
    var UserInput2 = prompt("Enter Second Number to Add");
    var sum = +UserInput + +UserInput2;

    return sum
}

console.log(sumofTwonum());



// question 4
function Calculator() {
    var firstNum = +prompt("enter first number");
    var secondNUM = +prompt("enter second number");
    var operation = prompt("enter operation (+, -, *, /, %)");
    if (operation === "+") {
        alert("THE sum is ; " + (firstNum + secondNUM));;
    }
    else if (operation === "-") {
        alert("THE difference is ; " + (firstNum - secondNUM));;
    }
    else if (operation === "*") {
        alert("THE product is ; " + (firstNum * secondNUM));;
    }
    else if (operation === "/") {
        alert("THE quotient is ; " + (firstNum / secondNUM));;
    }
    else if (operation === "%") {
        alert("THE modulus is ; " + (firstNum % secondNUM));;
    }
    else {
        alert("Invalid operation");
    }

}


Calculator();


// question 5

num = +prompt("Enter a number to find its square");
function Power(num) {
    var result = num * num;
    return result;


}


console.log(Power(num));


// question 6
// skiped

var number = +prompt("Enter a number to find its factorial");
function factorial(number) {
    var result = 1; 
    for (var i = 2; i <= number; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorial(number));



// question 7

function count() {

    var start = +prompt("Enter start number");
    var end = +prompt("Enter end number");
    for (var i = start; i <= end; i++) {
        console.log(i);
    }

}

count();

// question 8



function calculateHypotenuse() {
    var base = +prompt("Enter base number");
    var height = +prompt("Enter Height");
    function calculateSquare(base, height) {
        var baseResult = base * base;
        var heightResult = height * height;
        var result = Math.sqrt(baseResult + heightResult) ;
        return result;
    }

return calculateSquare(base, height);
}

alert("Hypotenuse OF TRIANGLE IS"+calculateHypotenuse());




// question 9

var width = +prompt("Enter width of rectangle");
var height = +prompt("Enter height of rectangle");
function areaOfRectangle(width, height) {
    var area = width * height;
    return area;
}

console.log("Area of rectangle: " + areaOfRectangle(width, height));



