
// question 1

var a = 10;

document.write("Result: <br> <br")
document.write("<br> The value of is " + a)
document.write("<br> ........................")


a = ++a;

document.write("<br><br> The vale of ++a is " + a)
document.write("<br> Now the vale of a is " + a)


a = a++;

document.write(" <br><br> The vale of a++ is " + a)
document.write("<br> Now the vale of a is " + a)


a = --a;

document.write(" <br><br> The vale of --a is " + a)
document.write("<br> Now the vale of a is " + a)

a = a--;

document.write(" <br><br> The vale of a-- is " + a)
document.write(" <br>Now the vale of a is " + a)

// question 2

var a = 2, b = 1;
var Result = --a - --b + ++b + b--;

document.write(" <br><br><br> a is " + a)

document.write(" <br> b is " + b)

document.write(" <br><br> Result is " + a + "<br> <br> <br>")



// question 3

var userName = prompt("Enter your name")
alert("Welcome " + userName)

// question 5


var tableNum = (Number = prompt("Enter a number to show its multiplication table"));
if (tableNum === undefined || tableNum === NaN || tableNum === undefined) {
    document.write(" <br>" + 5 + " x " + "1" + " =" + 5 * 1)
    document.write(" <br>" + 5 + " x " + "2" + " =" + 5 * 2)
    document.write(" <br>" + 5 + " x " + "3" + " =" + 5 * 3)
    document.write(" <br>" + 5 + " x " + "4" + " =" + 5 * 4)
    document.write(" <br>" + 5 + " x " + "5" + " =" + 5 * 5)
    document.write(" <br>" + 5 + " x " + "6" + " =" + 5 * 6)
    document.write(" <br>" + 5 + " x " + "7" + " =" + 5 * 7)
    document.write(" <br>" + 5 + " x " + '8' + " =" + 5 * 8)
    document.write(" <br>" + 5 + " x " + '9' + "=" + 5 * 9)
    document.write(" <br>" + 5 + " x " + '10' + " =" + 5 * 10)
}
else {
    document.write(" <br>" + tableNum + " x " + "1" + " =" + tableNum * 1)
    document.write(" <br>" + tableNum + " x " + "2" + " =" + tableNum * 2)
    document.write(" <br>" + tableNum + " x " + "3" + " =" + tableNum * 3)
    document.write(" <br>" + tableNum + " x " + "4" + " =" + tableNum * 4)
    document.write(" <br>" + tableNum + " x " + "5" + " =" + tableNum * 5)
    document.write(" <br>" + tableNum + " x " + "6" + " =" + tableNum * 6)
    document.write(" <br>" + tableNum + " x " + "7" + " =" + tableNum * 7)
    document.write(" <br>" + tableNum + " x " + '8' + " =" + tableNum * 8)
    document.write(" <br>" + tableNum + " x " + '9' + " =" + tableNum * 9)
    document.write(" <br>" + tableNum + " x " + '10' + " =" + tableNum * 10)
};


// question 6

var firstSubject = prompt("FIRST SUBJECT");
var firstSubjectMark = +prompt(" enter your " + firstSubject + " obtainmarks");
var secondSubject = prompt("Second SUBJECT");
var secondSubjectMark = +prompt(" enter your " + secondSubject + " obtainmarks");
var thirdSubject = prompt("Third SUBJECT");
var thirdSubjectMark = +prompt(" enter your " + thirdSubject + " obtainmarks");
var totalMarkPerSubject = 100;


document.write( " <br><br> Subject   Total Mark   obtainmark   percentage");
document.write("<br> <br>" + firstSubject + "          " + totalMarkPerSubject + "               " + firstSubjectMark + "         " + firstSubjectMark / totalMarkPerSubject * 100)
document.write("<br> <br>" + secondSubject + "          " + totalMarkPerSubject + "               " + secondSubjectMark + "          " + secondSubjectMark / totalMarkPerSubject * 100)
document.write("<br> <br>" + thirdSubject + "           " + totalMarkPerSubject + "                " + thirdSubjectMark + "          " + thirdSubjectMark / totalMarkPerSubject * 100)









