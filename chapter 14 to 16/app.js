var stringArray =["cat","dog","cow"];
var numArray = [1,2,3,4,5,6,7,8,9];
var bolArray = [true,false];
var maxArray = ["cat", "dog",1,2,true,false,];

var qualificationPak=["SSC","HSC","BSS","BCOM","MS","M.Phil","PhD"];

document.write(" <strong> Qualafication <strong/> <br> <br> ");

document.write("<br> <br> 1)");
document.write(qualificationPak[0]);
document.write("<br> <br> 2)");
document.write(qualificationPak[1]);
document.write("<br> <br> 3)");
document.write(qualificationPak[2]);
document.write("<br> <br> 4)");
document.write(qualificationPak[3]);
document.write("<br> <br> 5)")
document.write(qualificationPak[4]);
document.write("<br> <br> 6)");
document.write(qualificationPak[5]);
document.write("<br> <br> 7)");
document.write(qualificationPak[6]);
document.write("<br> <br>");


// question 8

var stdNames = ["SHOAHID","ALI","KASHIF"];
var stdScores = [450,400,350];
var totalMarks = 500;
var percentage1 = (stdScores[0]/totalMarks)*100;
var percentage2 = (stdScores[1]/totalMarks)*100;
var percentage3 = (stdScores[2]/totalMarks)*100;
document.write(" <strong> Student Marks & Percentage <strong/> <br> <br> ");


document.write("Score of " + stdNames[0] + " is " + stdScores[0] + ". Percentage: " + percentage1 + "% <br> <br>");
document.write("Score of " + stdNames[1] + " is " + stdScores[1] + ". Percentage: " + percentage2 + "% <br> <br>");
document.write("Score of " + stdNames[2] + " is " + stdScores[2] + ". Percentage: " + percentage3 + "% <br> <br>");
// question 9
var colorNames = ["Red","Green","Blue"]
colorNames.unshift(prompt("Which color you want to add to the beginning?"));
document.write(colorNames + "<br>");

colorNames.push(prompt("Which color you want to add to the end?"));

document.write(colorNames);
colorNames.unshift("Yellow","Purple");
document.write("<br>" + colorNames + "<br>");

colorNames.shift();

document.write("<br>" + colorNames + "<br>");
colorNames.pop();
document.write("<br>" + colorNames + "<br>");

var index = colorNames.push[ +prompt("in which index you want to add color names")];

document.write(index);


var index = colorNames.pop[ +prompt("in which index you want to delete color names")];

document.write(index)

//  question 10 skiped because of sort ascending order 
// question 11 


var cities = [Karachi,Lahore,Islamabad,Quetta,Peshawar];

var selectedCities = [2,3];

document.write(" <strong>  Cities LIST <strong/> <br> <br> ");
document.write(cities + "<br> <br>");
document.write(" <strong> Selected Cities LIST <strong/> <br> <br> ");
document.write(selectedCities + "<br> <br>");
// question 12

var arr = ["This ", "is ", "my ", "cat "];

document.write(arr);
// question 13

var devices = ["Keyboard","Mouse","Printer","Monitor"];
document.write(" <strong> Devices: <strong/> <br> <br> ");  
document.write(devices + "<br> <br>");
document.write(" <strong> Out: <strong/> <br> <br> ");
document.write(devices[0] + "<br>");
document.write(" <strong> Out: <strong/> <br> <br> ");
document.write(devices[1] + "<br>");
document.write(" <strong> Out: <strong/> <br> <br> ");
document.write(devices[2] + "<br>");
document.write(" <strong> Out: <strong/> <br> <br> ");
document.write(devices[3] + "<br>");

// question 14

var devices = ["Keyboard","Mouse","Printer","Monitor"];
document.write(" <strong> Devices: <strong/> <br> <br> ");
document.write(devices + "<br> <br>");
document.write(" <strong> Out: <strong/> <br> <br> ");
document.write(devices[3] + "<br>");
document.write(" <strong> Out: <strong/> <br> <br> ");
document.write(devices[2] + "<br>");
document.write(" <strong> Out: <strong/> <br> <br> ");
document.write(devices[1] + "<br>");
document.write(" <strong> Out: <strong/> <br> <br> ");
document.write(devices[0] + "<br>");
// question 15

var phoneManufacturer = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];

document.write(" <strong> Phone Manufacturers: <strong/> <br> <br> ");
document.write(phoneManufacturer  );










 
     



