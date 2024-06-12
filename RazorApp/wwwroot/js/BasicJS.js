/* Statements in JavaScript */

// output
alert("text ...");                                  // open alert Box
document.write("text | HTML code... ");             // write to HTML page
document.writeln("text | HTML code... ");           // write to HTML page

// variables
var x = 5, y = 5;                                   // typeof number
let num = 3.15 + 2 * 4.5;                           // typeof number
var name = "Gilad";                                 // typeof String
x = true;                                           // typeof boolean - variables are dynamics
var v1;                                             // typeof undefines

num++;                                              // Increment;
num = num + 1;                                      // Increment;
var str = name + " Markman";                        // concat or chaining

// input
var FirstName = prompt("Enter your first Name");    // display a dialog box for input
var str1 = prompt("Enter first Number");
num = parseInt(str1);                               // parse string to integer
var c = parseFloat("10.33");                        // parse string to floating point number

// if - else
var userName, password;
userName = prompt("enter your user name");
password = prompt("enter your password");

if (userName == "" || password == "") {
    document.writeln("You didn't enter userName or password<br />");
}
else if (userName == "Gilad" && password == "1968") {
    document.write("Wellcome Gilad Markman <br />");
}
else {
    document.write("userName or Password unknown <br />");
}

// switch - case
var day = prompt("enter day");
switch (day) {
    case "Sunday":
        alert("יום ראשון");
        break;
    case "Monday":
        alert("יום שני");
        break;
    default:
        alert("שאר השבוע");
}

// for loop
alert("start");
for (var i = 1; i < 10; i++) {
    document.write(i);
}

// while loop
alert("start");
i = 1;
while (i < 10) {
    document.write(i);
    i++;
}