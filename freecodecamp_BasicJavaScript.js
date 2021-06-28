//comment out in js 
/*
This is a multi-line comment

Note: 
  - add comments to clarify the function of parts of your code.
*/ 
//_________________________________________________________________________________________________________

// types of data: 
// undefined, null, boolean, string, symbol, bigint, number, and object

//declare 
var myName;  
//Storing Values with the Assignment Operator _________________________________________________________________________________________________________

// Setup
var a;

// Only change code below this line
a = 7 
//Assigning the Value of One Variable to Another  _________________________________________________________________________________________________________

// Setup
var a;
a = 7;
var b;

// Only change code below this line

b = a
a = b

//Initializing Variables with the Assignment Operator  _________________________________________________________________________________________________________
var a = 9; 

//Understanding Uninitialized Variables_________________________________________________________________________________________________________
// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

//Understanding Case Sensitivity in Variables_________________________________________________________________________________________________________
// Variable declarations
//var StUdLyCapVaR; 
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
    //STUDLYCAPVAR = 10;
    var studlyCapVar = 10; 
    //PRoperCAmelCAse = "A String";
    properCamelCase = "A String"; 
    //tITLEcASEoVER = 9000;
    titleCaseOver = 9000; 

//Add Two Numbers with JavaScript_________________________________________________________________________________________________________
var sum = 10 + 10;
var difference = 45 - 33;
var product = 8 * 10;
var quotient = 66 / 33;
//Increment a Number with JavaScript _________________________________________________________________________________________________________
var myVar = 87;

// Only change code below this line
//myVar = myVar + 1;
myVar++; 

//Decrement a Number with JavaScript_________________________________________________________________________________________________________
var myVar = 11;

// Only change code below this line
//myVar = myVar - 1;
myVar--; 

//Create Decimal Numbers with JavaScript_________________________________________________________________________________________________________
var ourDecimal = 5.7;

// Only change code below this line
var myDecimal = 5.7; 
//Multiply Two Decimals with JavaScript_________________________________________________________________________________________________________
var product = 2.0 * 2.5;
var quotient = 4.4 / 2.0; // Change this line

//Finding a Remainder in JavaScript_________________________________________________________________________________________________________
    //The remainder operator % gives the remainder of the division of two numbers.
    // Only change code below this line

var remainder;
remainder = 5%3; 

/*
a number can be checked to be even or odd 
17 % 2 = 1 (17 is Odd)
48 % 2 = 0 (48 is Even)
*/
//Compound Assignment With Augmented Addition_________________________________________________________________________________________________________
var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a += 12; //a = a + 12;
b += 9; //b = 9 + b;
c += 7; //c = c + 7;

/*
var myVar = 1;
myVar += 5;
console.log(myVar);
*/

var a = 11;
var b = 9;
var c = 3;

// Only change code below this line
a -= 6;  //a = a - 6;
b -= 15; //b = b - 15;
c -= 1; //c = c - 1;
//Compound Assignment With Augmented Multiplication_________________________________________________________________________________________________________
var a = 5;
var b = 12;
var c = 4.6;

// Only change code below this line
a *= 5; //a = a * 5;
b *= 3; //b = 3 * b;
c *= 10; //c = c * 10;

var a = 48;
var b = 108;
var c = 33;

// Only change code below this line
a /= 12; //a = a / 12;
b /= 4; //b = b / 4;
c /= 11;// c = c / 11;
//Declare String Variables_________________________________________________________________________________________________________
var myFirstName = "Sarah"; 
var myLastName = "Wright"; 
//Escaping Literal Quotes in Strings_________________________________________________________________________________________________________
//quotations in strings 

var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
//outputs: I am a "double quoted" string inside "double quotes".
//Quoting Strings with Single Quotes_________________________________________________________________________________________________________
/*
doubleQuoteStr = "This is a string"; 
singleQuoteStr = 'This is also a string';

conversation = 'Finn exclaims to Jake, "Algebraic!"';

goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
dont do this -> badStr = 'Finn responds, "Let's go!"';
*/

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
//Escape Sequences in Strings_________________________________________________________________________________________________________
var myStr; // Change this line
myStr = "FirstLine" + '\n' + '\t' + '\\'+ "SecondLine" + '\n' + "ThirdLine"; 

/*
To allow you to use characters you may not otherwise be able to type out, such as a carriage return.
To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.
    \'	single quote
    \"	double quote
    \\	backslash
    \n	newline
    \r	carriage return
    \t	tab
    \b	word boundary
    \f	form feed
*/
//Concatenating Strings with Plus Operator_________________________________________________________________________________________________________
var myStr; // Change this line
myStr = "This is the start. " + "This is the end."; 
//spaces dont count you have to add them manually at the end of the quotes 

// Only change code below this line

// Only change code below this line

var myStr;
myStr = "This is the first sentence. "; 
myStr += "This is the second sentence."; 
//Constructing Strings with Variables _________________________________________________________________________________________________________
// Only change code below this line
var myName;
var myStr;
myName = "Sarah"; 
myStr = "My name is" + myName +"and I am well!"; 


// Change code below this line

var someAdjective = "petty";
var myStr = "Learning to code is ";
myStr += someAdjective; 
//Find the Length of a String _________________________________________________________________________________________________________
// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line

lastNameLength = lastName.length;
//Use Bracket Notation to Find the First Character in a String _________________________________________________________________________________________________________
// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
//Understand String Immutability_________________________________________________________________________________________________________
//The only way to change myStr would be to assign it with a new string
//Therefore this does not work: 
var myStr = "Bob";
myStr[0] = "J";


// Setup
var myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line
//Use Bracket Notation to Find the Nth Character in a String_________________________________________________________________________________________________________
// Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName[2]; // Change this line
//Use Bracket Notation to Find the Last Character in a String_________________________________________________________________________________________________________
// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length-1]; // Change this line
//Use Bracket Notation to Find the Nth-to-Last Character in a String_________________________________________________________________________________________________________
// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2]; 
//e = 8 - 1; c = 8 - 2
// Change this line




//Word Blanks_________________________________________________________________________________________________________
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = "A " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Change this line
// Only change code above this line

//Store Multiple Values in one Variable using JavaScript Arrays_________________________________________________________________________________________________________
// Only change code below this line
var myArray = ["hello", 4];
//Nest one Array within Another Array_________________________________________________________________________________________________________
// Only change code below this line
var myArray = [[1,2, "hi"], ['a','b']];
//Access Array Data with Indexes_________________________________________________________________________________________________________
var myArray = [50,60,70];
var myData = myArray[0]; 

//Modify Array Data With Indexes_________________________________________________________________________________________________________
//Unlike strings, the entries of arrays are mutable and can be changed freely.
// Setup
var myArray = [18,64,99];
myArray[0] = 45; 
myArray[1] = 64; 
myArray[2] = 99; 
// Only change code below this line
//Access Multi-Dimensional Arrays With Indexes_________________________________________________________________________________________________________
/*
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3];
arr[3][0];
arr[3][0][1];


arr[3] is [[10, 11, 12], 13, 14], 
arr[3][0] is [10, 11, 12],
 and arr[3][0][1] is 11.
*/ 

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[0][0];
myData = myArray[2][1];

//Store Multiple Values in one Variable using JavaScript Arrays_________________________________________________________________________________________________________
// Only change code below this line
var myArray = ["apple sauce", 4];
//Nest one Array within Another Array_________________________________________________________________________________________________________
//also called a multi-dimensional array.
// Only change code below this line
var myArray = [["Hello", 4], "hi"];
//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

//_________________________________________________________________________________________________________

