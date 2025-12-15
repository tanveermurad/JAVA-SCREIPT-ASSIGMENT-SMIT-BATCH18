
var num1 = 10;
var num2 = 20;
 document.write( "Sum of " + num1 + " and " + num2 + " is " + (num1 + num2) );

//  substraction

document.write( "<br>Substraction of " + num1 + " and " + num2 + " is " + (num1 - num2) );

// multiplication

document.write( "<br>multiplication of " + num1 + " and " + num2 + " is " + (num1 * num2) );

// division
document.write( "<br>division of " + num1 + " and " + num2 + " is " + (num1 / num2) );
// modulus
document.write( "<br>modulus of " + num1 + " and " + num2 + " is " + (num1 % num2) );

// decrement and increment

var value;
document.write( "<br> Value after variable declaration is: " + value );
 value = 5;
document.write( "<br> initial value is: " + value );
value++;

document.write( "<br> value after increment is : "+ value);
value= value + 7;
document.write( "<br> value after addition is : "+ value);
value--;
document.write( "<br> value after decrement is : "+ value);

value = value / 3;
document.write( "<br> the remainder is : "+ value);


ticketprice = 600;
document.write( "<br> Total cost to buy 6 tickets to a movie is " + ticketprice * 6 + " PKR");

// multiplication table

var number = 4;
document.write( "<br> Table of " + number + "<br>");

document.write( number + " x " + 1 + " = " + number * 1 + "<br>");
document.write( number + " x " + 2 + " = " + number * 2 + "<br>");
document.write( number + "x" + 3 + "=" + number * 3 + "<br>");
document.write(number + "x"  + 4  + "=" + number * 4 + "<br>");
document.write(number + "x"  + 5  + "=" + number * 5 + "<br>");
document.write(number + "x"  + 6  + "=" + number * 6 + "<br>");
document.write(number + "x"  + 7  + "=" + number * 7 + "<br>");
document.write(number + "x"  + 8  + "=" + number * 8 + "<br>");
document.write(number + "x"  + 9  + "=" + number * 9 + "<br>");
document.write(number + "x"  + 10  + "=" + number * 10 + "<br>");


// temperature conversion

var celsius = 25;
var fahrenheit = 70;
var fahrenheitToCelsius = (fahrenheit - 32) * 5/9;
var celsiusToFahrenheit = (celsius * 9 / 5) + 32;

document.write( "<br>" + celsius + "°C is " + celsiusToFahrenheit + "°F" );
document.write( "<br>" + fahrenheit + "°F is " + fahrenheitToCelsius + "°C" );


// Shopping Cart
var item1Price = 500;
var item2price = 300;
var item1Quantity = 2;
var item2Quantity = 3;
var shippingCharges = 200;
var totalcost =(item1Price * item1Quantity)  + (item2price * item2Quantity) + shippingCharges;



document.write(  bold("<br> Shopping Cart") + "<br><br>");
document.write( "Price of item 1 is " + item1Price + "<br>");
document.write( "Quantity of item 1 is " + item1Quantity + "<br>");
document.write(" Price of item 2 is " + item2price + "<br>");
document.write( "Quantity of item 2 is " + item2Quantity + "<br>");
document.write( "Shipping Charges " + shippingCharges + "<br><br>");
document.write( "Total cost of your order is " + totalcost );


function bold(text) {
    return "<b>" + text + "</b>";
}

// Marks Sheet
var totalmarks = 900;
var marksobtained = 700;
var percentage = (marksobtained / totalmarks) * 100;

document.write(bold("<br><br> Marks Sheet") + "<br><br>");
document.write("Total marks: " + totalmarks + "<br>");
document.write("Marks obtained: " + marksobtained + "<br>");
document.write("Percentage: " + percentage + "%");

// Currency in PKR
var usDollar = 10;
var saudiRiyal = 25;

var pkr = (usDollar * 280) + (saudiRiyal * 70);
document.write(bold("<br><br> Currency in PKR") + "<br><br>");
document.write("Total Currency in PKR: " + pkr);

// Age Calculator
var currentyear = 2025;
var birtyear = 2007;
var age = currentyear - birtyear;
document.write(bold("<br><br> Age Calculator") + "<br><br>");
document.write("Current Year: " + currentyear + "<br>");
document.write("Birth Year: " + birtyear + "<br>");
document.write("Your Age is: " + age + "<br>");

// The Geometrizer
var radius_Circle = 20;
var circumference = 2 * 3.142 * radius_Circle;
var area = 3.142 * radius_Circle * radius_Circle;
document.write(bold("<br><br> The Geometrizer") + "<br><br>");
document.write("Radius of a circle: " + radius_Circle + "<br>");
document.write("Circumference of a circle: " + circumference + "<br>");
document.write("Area of a circle: " + area + "<br>");

// The Lifetime Supply Calculator
var favSnack = "irani popok chip";
var currentAge = 18;
var maxAge = 65;
var amountPerDay = 4;

var totalNeed = (maxAge - currentAge) * amountPerDay;
document.write(bold("<br><br> The Lifetime Supply Calculator") + "<br><br>");
document.write("Favourite Snack: " + favSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br>");
document.write("You will need " + totalNeed + " " + favSnack + " to last you until the ripe old age of " + maxAge + "<br>");














