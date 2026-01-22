// question 1


var multidimenionalArr = [
    []
];


// question 2



var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],

];

document.write(matrix[0] + " <br> ")
document.write(matrix[1] + " <br> ")
document.write(matrix[2] + " <br> ")



// question 3


for (var i = 1; i <= 10; ++i) {
    document.write(i + " <br>")
}



// question 4


var tableToprint = +prompt("enter number to print it'S TABLE");

var lenthOftable = +prompt("enter the lenth of table ");

document.write("The multiplication of " + tableToprint)
document.write(" <br> length " + tableToprint + " <br>")


for (var i = 1; i <= lenthOftable; ++i) {
    document.write(tableToprint + "x" + i + "=" + tableToprint * i + "<br>")
}


// question 5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]


for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>")
}


for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " " + fruits[i] + "<br>")
}


// question 6  
document.write("<strong> Counting: <strong>  <br> <br>")
for (var i = 1; i <= 15; i++) {
    document.write(i + " , ")
}


document.write(" <br>  <br> <strong> Reverse Counting: <strong>  <br> <br>")
for (var i = 10; i >= 1; i--) {
    document.write(i + " , ")
}



document.write(" <br>  <br> <strong> Even: <strong>  <br> <br>")
for (var i = 0; i <= 20; ++i) {


    if (i % 2 == 0) {
        document.write(i + " , ")
    }

}


document.write(" <br>  <br> <strong> Odd: <strong>  <br> <br>")
for (var i = 0; i <= 20; ++i) {


    if (i % 2 !== 0) {
        document.write(i + " , ")
    }

}


document.write(" <br>  <br> <strong> Series: <strong>  <br> <br>")
for (var i = 2; i <= 20; ++i) {


    if (i % 2 == 0) {
        document.write(i + "k, ")
    }

}



// Question 7

var A = ["cake", "apple pie", "cookies", "chips", "patties"]
var userInput = prompt('WELCOME TO SMIT BAKERY.WHAT DO U WANT TO BUY ? ')
var matchFound = false
for (var i = 0; i < A.length; ++i) {
    if (userInput == A[i]) {
        matchFound = true

        break


    }
}
if (matchFound == true) {

    alert(userInput + " is available at index " + i)
} else if (matchFound == false) {
    alert(userInput + " is  not available ")
}

// QUESTION 8

nums = [24, 53, 78, 91, 12]
var largestNum = nums[0]
for (var i = 1; i < nums.length; i++) {

    if (largestNum < nums[i]) {
        largestNum = nums[i]
    }
}

document.write("<br><br> The larhest num is: " + largestNum)
document.write("<br> <br> The arrays:" + nums)



// question 9

nums = [24, 53, 78, 91, 12]
var smallestNum = nums[0]
for (var i = 1; i < nums.length; i++) {

    if (smallestNum > nums[i]) {
        smallestNum = nums[i]
    }
}

document.write("<br><br> The smallest num is: " + smallestNum)
document.write("<br> <br> The arrays:" + nums + "<br> <br> ")


// quetion 10


for(var i = 1;i<=20;++i){
    var multiPli=5*i

    document.write(multiPli+",")
}