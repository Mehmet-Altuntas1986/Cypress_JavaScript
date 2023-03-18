// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

//A JavaScript variable can hold any type of data.

let l = 16 + "Volvo";
let z = "Volvo" + 16 + 4;  //Volvo164


let d;       // Now d is undefined
d = 5;       // Now d is a Number
d = "John";  // Now d is a String

//~Strings are written with quotes. You can use single or double quotes:

// Using double quotes:
let carName1 = "Volvo XC60";

// Using single quotes:
let carName2 = 'Volvo XC60';

//~JavaScript Numbers

// With decimals:
let x1 = 34.00;

// Without decimals:
let x2 = 34;

//~Exponential Notation  (ustsel)

let ust  = 123e5;     // 12300000      123 *  10 uzeri  5
let ust1 = 123e-5;   // 0.00123        123 *  10 uzeri -5

//Javascript are always one type:
//double (64-bit floating point).


/*

JavaScript BigInt
All JavaScript numbers are stored in a a 64-bit floating-point format.

JavaScript BigInt is a new datatype (2020) that can be used to store integer values that are 
too big to be represented by a normal JavaScript Number.

*/

let big = BigInt("123456789012345678901234567890");

//boolean
let df = 5;
let sf = 6;
console.log(df==sf)   //false

const cars2 = ["Saab", "Volvo", "BMW"];
const cars3 = ['Saab', 'Volvo', "BMW"];   

console.log(cars3)  //[ 'Saab', 'Volvo', 'BMW' ]


//~JavaScript Objects

//& JavaScript objects are written with curly braces {}.

//& Object properties are written as name:value pairs, separated by commas.

const person2 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//*The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.

/*
~The typeof Operator
You can use the JavaScript typeof operator to find the type of a JavaScript variable.

The typeof operator returns the type of a variable or an expression:

<script>
document.getElementById("demo").innerHTML = 
typeof "" + "<br>" +                              //string
typeof "John" + "<br>" +                          //string
typeof "John Doe";                                //string
</script>

*/

typeof 0              // Returns "number"
typeof "John Doe"     // Returns "string"


//Undefined 
let car;    // Value is undefined, type is undefined
