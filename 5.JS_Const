//The const keyword was introduced in ES6 (2015).

//Variables defined with const cannot be Redeclared ,reassigned .
//const have block scope like let

const PI = 3.141592653589793;
// PI = 3.14;      // This will give an error
// PI = PI + 10;   // This will also give an error

//^JavaScript const variables --must be assigned-- a value when they are declared:

/*
When to use JavaScript const?
Always declare a variable with const when you know that the value should not be changed.

Use const when you declare:

A new Array
A new Object
A new Function
A new RegExp
*/

//~You can change the elements of a constant array:
//~Constant Arrays
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element at the end
cars.push("Audi");

/*
~bu sekilde reassignment yapamazsin

const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR
*/

//~Constant Objects         (Objects store properties)

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";




//~But you can NOT reassign the object:

//const car = {type:"Fiat", model:"500", color:"white"};

//car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

//^^ The const keyword is not fully supported in Internet Explorer




//~Declaring a variable with const is similar to let when it comes to Block Scope.


const x = 10;
// Here x is 10

{
const x = 2;
// Here x is 2
}

// Here x is 10



//Redeclaring a JavaScript var variable is allowed anywhere in a program:

var y = 2;     // Allowed
var y = 3;     // Allowed
x = 4;         // Allowed


//~Redeclaring an existing var or let variable to const, in the same scope, is not allowed:

   var z = 2;     // Allowed
// const z = 2;   // Not allowed

{
let z = 2;     // Allowed
//const z = 2;   // Not allowed
}

{
const z = 2;   // Allowed
//const z = 2;   // Not allowed
}


//Reassigning an existing const variable, in the same scope, is not allowed:
/*

const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}

*/

//~Redeclaring a variable with const, in another scope, or in another block, is allowed:
const c = 2;       // Allowed

{
  const c = 3;   // Allowed
}

{
  const c = 4;   // Allowed
}



//var da okey  , let ve const ta reference hatasi verir


//Variables defined with var are hoisted(kaldirma) to the top and can be initialized at any time.
//~Meaning: You can use the variable before it is declared:
carName = "Volvo";
var carName;

//^Meaning: Using a const variable before it is declared will result in a ReferenceError:
alert (carName);
const carName = "Volvo";  //reference error in website    //declerad carname in this line but there is before this line