// question1

var firstName = prompt("Enter Your First Name")
var lasttName = prompt("Enter Your last Name")
var fullName = firstName + lasttName
alert("Good Evening " + fullName)



// question 2


var fvrtMobilemodel = prompt("enter your fvrt MObile Model")
document.write(' <br>  MY Favorite mobile model is: ' + fvrtMobilemodel)
var lengtOfString = fvrtMobilemodel.length
document.write(" <br> The length of  string: " + lengtOfString)


// question 3


var Pak = "Pakistan"

indexNum = Pak.indexOf('n')

document.write(" <br> String: " + Pak)
document.write(" <br> IndeX: " + indexNum)



// question 4

var word = "Hello World"

var lastIndex = word.lastIndexOf("l")

document.write("<br> String : " + word)
document.write("<br> Last index of 'l' :" + lastIndex)

// qustion 5
var nationality = "Pakistani"
var nationalityIndex = nationality.charAt(3)

document.write(" <br> String: " + nationality)
document.write(" <br>character at index 3 : " + nationalityIndex)


// question 6

var firstName = prompt("Enter Your First Name")
var lasttName = prompt("Enter Your last Name")
fullName = firstName.concat(firstName, lasttName)
alert("Good Evening " + fullName)


// question 7

var city = "Hyderabad"

var result = city.replace("Hyder", "Islam")

document.write("<br>" + result)

// question 8

var message = "Ali and hassan are best friends.They play cirket and football together, ";

var finalMessage = message.replaceAll("and", "&")
document.write("<br>" + finalMessage)

// question 9

var valueString = "472"

var valueNum = parseInt(valueString)

document.write(" <br>Value: " + valueString)
document.write(" <br>Type: " + typeof (valueString))
document.write(" <br> Value: " + valueNum)
document.write(" <br>Type: " + typeof (valueNum))


// question 10 


var inputToconvert = prompt("write sentence to conver its cases")

var convertedInput = inputToconvert.toUpperCase()

document.write("<br> User Input: " + inputToconvert)
document.write("<br> Upper case :" + convertedInput)


// question 11



var inputTotitlecase = prompt("ENTER TEXT TO COVERT IT IN TITLE CASE")


var titleCase= inputTotitlecase.slice(0,1).toUpperCase() +inputTotitlecase.slice(1)


document.write("<br> User Input: "+ inputTotitlecase)
document.write("<br> TitleCase case :"+ titleCase)





// question 12



var num4 = 35.36
num5 = num4.toString().replace('.', '')
var newnum4 = parseInt(num5)

document.write(" <br>  Number: " + num4)
document.write(" <br>  Result: " + newnum4)


// qution 13

var userName = prompt("Enter your username")

var specialChar = [",", ".", "@", "!"]
matchfound = false
for (var i = 0; i < specialChar.length; ++i) {
    for (var i2 = 0; i2 < userName.length; ++i2) {
        if (userName[i2] === specialChar[i]) {
            matchfound = true
            break
        }


    }

}


if (matchfound == true) {
    alert("enter a valid password")
} else if (matchfound == false) {
    alert("correct")
}



// question 14



var backeryStack = ["cookies", "apple pie", "cokie", "chips", "patties"]

var itemsToBuy = prompt("What item do u want to buy")
var itemsToBuy1 = itemsToBuy.toLocaleLowerCase()
found = false
for (var i = 0; i < backeryStack.length; ++i) {

    if(itemsToBuy1 === backeryStack[i]) {
        found = true
        break
    }
}
if (found === true) {
    document.write(" <br>" + itemsToBuy1 + " is available at index " + i )
} else {
    document.write(" <br>" + itemsToBuy1 + " is not available  " + "in our bakery")
}


// question 15


// stuck




// question 16


var university = "University of Karachi"

 var arr =university.split("")

 for(var i =0;i<university.length;++i){
    document.write("<br>" + arr[i])
 }
//  qustion 17

var nationality = "Pakistan"

var lastletter = nationality.slice(7,8)
document.write("<br> <br>" + lastletter)