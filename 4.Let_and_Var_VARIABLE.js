/*
The let keyword was introduced in ES6 (2015).

Variables defined with let can not be redeclared.

Variables defined with let must be declared before use.

Variables defined with let have block scope.

*/

// let and const cannot be redeclared


//!If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.

let y = 2 + 3 + "5";  //55

let $ = "Hello World";

let $myMoney = 5;

let _x = 2;


//redeclaration is not possible wiht let
let a = "John Doe";

//let a = 0;             //two times let a  cannot be used to show redecleration

//with var you can redeclare

var c=5
var c=6;
console.log(c)  //6

/*Before ES6 (2015), JavaScript had Global Scope and Function Scope.
now
1-Global Scope 
2-Function Scope
3-block scope

*/

{
    let x = 2;
  }
  // x can NOT be used here



  {
    var v = 2;
  }
  // v CAN be used here



  //Redeclaring a variable using the var keyword can impose problems.

  //Redeclaring a variable inside a block will also redeclare the variable outside the block:

  var g = 10;
// Here g is 10

{
var g = 2;
// Here g is 2
}

// Here g is 2


//~The let keyword is not fully supported in Internet Explorer 11 or earlier.


// ^Redeclaring a JavaScript variable with var is allowed anywhere in a program:

var h = 2;   // Allowed
//let h = 3;   // Not allowed

{
let l= 2;   // Allowed
//let l= 3;   // Not allowed
}

{
let _x = 2;   // Allowed
//var _x = 3;   // Not allowed
}


//&  ^^^ Redeclaring a variable with let, in another block, IS allowed:^^^

let m = 2;   // Allowed

{
let m = 3;   // Allowed
console.log("m is in first block :"+m);    //3
}

{
let m = 4;    // Allowed
//let m=5;    //not allowed redecleration in the same block
console.log("m is in second block :"+m);   //4
}

console.log("m is :"+m);                   //2


//^^^     try same with    -  var -  =>var da block icindede bir degisiklik olsa , block disina bu degisiklik gecer

var m1 = 2;   // Allowed

{
var m1 = 3;   // Allowed
console.log("m1 is in first block :"+m1);    //3
}

{
var m1 = 4;    // Allowed
console.log("m1 is in second block :"+m1);   //4
}

console.log("m1 is :"+m1);                   //4


//^   Let Hoisting (kaldirilma)
//!   Variables defined with var are hoisted to the top and can be initialized at any time.

//^   Meaning: You can use the variable before it is declared:


//  With var, you can use a variable before it is declared:   //ayni seyi let ile yapinca reference hatasi verir
myCarName="volvo"    // Assign volvo to myCarName
var myCarName;       // Declare myCarName

