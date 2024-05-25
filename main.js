    //  "ALERT" "CHAP#1"
let greek=("Welcome");
alert(greek);


let username=("Error! Plase enter a vaild password.");
alert(username);

const greek1=("Welcome to JS land....\n Happy Coding")
alert(greek1)

let n=("Welcome to JS land....\n Happy Coding \n Prevent this page from creating additional dialogs."); 
alert("Welcome to JS land...");
alert("Happy Coding \n Prevent this page from creating additional dialogs.");

console.log=("Hello...I can run JS through my web brower's consol");

//     //    CHAPTER#2 "VARIABLES FOR STRINGS"

let name1=String("username")
alert(name1);

let myName=String("Sharmeen");
alert(myName)


let message;
message=("Hello World");
alert(message);


const studName=("Jhone Doe");
let studentAge="15"
const course=("Certified Mobail Appication Deveopment")
alert(studName);
alert(age)
alert(course)

let alertMessage=("PIZZA"+"\n"+"PIZZ"+"\n"+ "PIZ"+"\n"+"PI"+"\n"+"P");
alert(alertMessage);

const mail=("My email address is " + "example@example.com");
alert(mail)

let bookValue=("A smarter way to learn JavaScript");
alert(bookValue);

       
            //   CHAP#3 VARIABLES FOR NUMBERS

 const age=15 ;
 alert(" I am " + age + " " + " year old ");


let N=5;
alert("You have visited this site" + " " + "N" + " " + "times");


let myBirth=1990
document.write("My birth year is" + myBirth +"<br/>");
document.write("Data type of my declear value is number");

let visitor="Jhon Doe"
let product="T-shirt(s)"
let quality= 5
document.write( visitor + " " + "order" + " " + product + quality + " " + "on XYZ Clothing store");


            //    CHAPTER # 4

let myPersonality,behaivour,beauty;
alert( myPersonality + behaivour + beauty);


let myAge, my_name, myName123, $myName, MyName$;
// let my Age, 123myAge, my#age, name, myAge!;

document.write("<h1>Rules for naming JS variables</h1>");
document.write("<li>Variable names can only contain letters, digits, underscores, and dollar signs. For example $my_1stVariable </li>");
document.write("<li>Variables must begin with a letter, underscore, or dollar sign. For example $name, _name or name</li>");
document.write("<li>Variable names are case sensitive </li>");
document.write("<li>Variable names should not be JS keywords </li>");


//                 CHAPTER # 5

let num1 =3
let num2 =5
let addNum = num1+num2
document.write( "Sum of" +" "+ num1 +" "+ "and" + " "+ num2 + " "+ "is" + addNum)

let subNum= num2 - num1
let mulNum= num2 * num1
let divNum= num2 / num1
let modNum= num2 % num1

document.write('difference of' + ' ' + num2 + ' ' + 'and' + ' ' + num1 + ' ' + 'is' + ' ' + subNumNum + "<br/>")
document.write('product of' + ' ' + num2 + ' ' + 'and' + ' ' + num1 + ' ' + 'is' + ' ' + mulNumNum + "<br/>")
document.write('division of' + ' ' + num2 + ' ' + 'divided by' + ' ' + num1 + ' ' + 'is' + ' ' + divNumNum + "<br/>")
document.write('reminder of' + ' ' + num2 + ' ' +'divided by' + ' ' + num1 + ' ' + 'is' + ' ' + modNumNum + "<br/>")

let variable;
document.write('Value after variable declaration is' + ' ' + variable + "<br/>")

let value=5
document.write('intial value' + ' ' + value + "<br/>")

let incValue = ++value
document.write('Value after increment is:' + ' ' + incValue + "<br/>")

let add= incValue + 7
document.write('Value after addition is:' + ' ' + add + "<br/>")

let decValue=--add
document.write('Value after decrement is:' + ' ' + decValue + "<br/>")

let mod=decValue % 3
document.write('The remainder is:' + ' ' + mod + "<br/>")

let ticket=5
let ticketCost=600
let totalCost=ticket*ticketCost
document.write('Total cost to buy' + ' ' + ticket + ' ' + 'tickets to a movie is' + ' ' + totalCost + ' ' + 'PKR' + ' ' + "<br/>")

let number = 9;
document.write("<h3>Table of " + number + "</h3>");

document.write(number + " x 1 = " + (number * 1) + "<br>");
document.write(number + " x 2 = " + (number * 2) + "<br>");
document.write(number + " x 3 = " + (number * 3) + "<br>");
document.write(number + " x 4 = " + (number * 4) + "<br>");
document.write(number + " x 5 = " + (number * 5) + "<br>");
document.write(number + " x 6 = " + (number * 6) + "<br>");
document.write(number + " x 7 = " + (number * 7) + "<br>");
document.write(number + " x 8 = " + (number * 8) + "<br>");
document.write(number + " x 9 = " + (number * 9) + "<br>");
document.write(number + " x 10 = " + (number * 10) + "<br>");


document.write("<h3>Conversion</h3>");
let C=25
let Fahrenhei=(C*9/5) + 32
let F=70
let Celsius=(F-32) * 5/9
document.write(C + '<sup>o</sup>C' + ' ' + 'is' + ' ' + Fahrenhei + ' ' + '<sup>o</sup>F' + '<br/>')
document.write(F + '<sup>o</sup>F' + ' ' + 'is' + ' ' + Celsius + ' ' + '<sup>o</sup>C' + '<br/>')

let itemPrice1=650
let itemPrice2=100
let itemQuantity1=3
let itemQuantity2=7
let shipping=100
let total1=(itemPrice1*itemQuantity1) + (itemPrice2*itemQuantity2) + shipping
document.write('Total cost of your order is' + ' ' + total1)

document.write("<h3>Market Sheet</h3>")
let totalMark=980
let markObtain=804
let per=totalMark/markObtain*100
document.write("Total mark:"+" "+totalMark+"<br/>"+ "markObtain:"+" "+markObtain+"<br/>"+"percentage"+" "+per +'<br/>');


document.write("<h3>Currency in PKR</h3>")
let usdAmount = 10;
let sarAmount = 25;
let exchangeRateUSD = 104.80;
let exchangeRateSAR = 28;

let totalPKR = (usdAmount * exchangeRateUSD) + (sarAmount * exchangeRateSAR);
document.write("The Currency in PKR:" + ' ' + totalPKR);

let digit = 5
let result = (((digit+5)*10)/2);
document.write("Result:" + " "+ result);
 
document.write("<h3>Age Calculator</h3>")
let currentYear= 2024
let birthYear= 2015
let age1= currentYear - birthYear;
let age2= age1-1;
document.write("They are eathier" + age1 + "or" + age2  +" years old ");


document.write("<h3>The Geometrizer</h3>")
let radius=20
let circumference=2*3.142*radius
let area=3.142*(20*20)
document.write("The circumference is"+ circumference+ "<br/>");
document.write("The area is"+ area);

        //   CHAPTER # 06

let a= 10
let a1= ++a
let a2= a++
let a3= a
let a4= --a
let a5= a--
let a6= a

document.write("Result:" + "<br/>")
document.write("The value of a is:" + " " + a + "<br/> ")
document.write("..................." + "<br/> ")
document.write("<br/>")
document.write("The value of ++a is:" + " " + a1 + "<br/> ")
document.write("The value of a is:" + " " + a1 + "<br/> ")
document.write("<br/>")
document.write("The value of a++ is:" + " " + a2 + "<br/> ")
document.write("The value of a is:" + " " + a3 + "<br/> ")
document.write("<br/>")
document.write("The value of --a is:" + " " + a4 + "<br/> ")
document.write("The value of a is:" + " " + a5 + "<br/> ")
document.write("<br/>")
document.write("The value of a-- is:" + " " + a5 + "<br/> ")
document.write("The value of a is:" + " " + a6 + "<br/> ")


let ai = 2, b = 1;
let result1 = --ai - --b + ++b + b--;

document.write("--ai is 1" + "<br/>")
document.write("--ai - --b is 1 - 0 = 1" + "<br/>")
document.write("--ai - --b + ++b is 1 - 0 + 1 = 2" + "<br/>")
document.write("--ai - --b + ++b + b-- is 1 - 0 + 1 + 1 = 3" + "<br/>")

document.write("Result: " + result1 + "<br/>")


let username0=prompt("Enter your name")
alert("Welcome " + username + " to our website")
document.write("Welcome " + username + " to our website")


let newNumber=prompt("Enter any number",5);
newNumber=parseInt(newNumber)

document.write("<h3>Table of " + newNumber + "</h3>");

document.write(newNumber + " x 1 = " + (newNumber * 1) + "<br>");
document.write(newNumber + " x 2 = " + (newNumber * 2) + "<br>");
document.write(newNumber + " x 3 = " + (newNumber * 3) + "<br>");
document.write(newNumber + " x 4 = " + (newNumber * 4) + "<br>");
document.write(newNumber + " x 5 = " + (newNumber * 5) + "<br>");
document.write(newNumber + " x 6 = " + (newNumber * 6) + "<br>");
document.write(newNumber + " x 7 = " + (newNumber * 7) + "<br>");
document.write(newNumber + " x 8 = " + (newNumber * 8) + "<br>");
document.write(newNumber + " x 9 = " + (newNumber * 9) + "<br>");
document.write(newNumber + " x 10 = " + (newNumber * 10) + "<br>");



let subject1="English"
let subject2="Maths"
let subject3="Science"
let totalMark2=100
let obtMark1=54
let obtMark2=54
let obtMark3=48
let totalMarx = totalMark * 3;
let percentageSubject1 = (obtMark1 / totalMark) * 100;
let percentageSubject2 = (obtMark2 / totalMark) * 100;
let percentageSubject3 = (obtMark3 / totalMark) * 100;

document.write("<table border='2'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMark + "</td><td>" + obtMark1 + "</td><td>" + percentageSubject1 + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMark + "</td><td>" + obtMark2 + "</td><td>" + percentageSubject2 + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMark + "</td><td>" + obtMark3 + "</td><td>" + percentageSubject3 + "%</td></tr>");
document.write("<tr><th>Total</th><td>" + totalMarx + "</td><td>" + (obtMark1 + obtMark2 + obtMark3) + "</td><td>" + (((obtMark1 + obtMark2 + obtMark3) / totalMarx) * 100) + "%</td></tr>");
document.write("</table>");

















