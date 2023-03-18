/*
4 Ways to Declare a JavaScript Variable:
Using var
Using let
Using const
Using nothing         

*/
//  Variables are containers for storing data (storing data values).
var x = 5; 
var x=4;     //var can be redeclared    
var y = 6;
var z = x + y;

/*  x,y, ve z   declere edildiginden asagidakiler bilgisayarin kafasini karistirir  ,compile error vermez ama consol calismaz

let x = 5;
let x=4;     //cannot be redeclared   
let y = 6;
let z = x + y;

*/

/*

^ When to Use JavaScript   - var -   ?
Always declare JavaScript variables with var,let, or const.

The var keyword is used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

If you want your code to run in older browsers, you must use var.

*/

// ^If you want a general rule: always declare variables with const. (VALUE CANNOT BE CHANGED)

const price1 = 5;
 //price1 = 6;
 console.log(price1)

 /*

<script>
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
document.getElementById("demo").innerHTML =
"The total is: " + total;
</script>

*/

/*
JavaScript Identifiers
All JavaScript variables must be identified with unique names.

These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

^Names can contain letters, digits, underscores, and dollar signs.
^Names must begin with a letter.
^Names can also begin with $ and _ (but we will not use it in this tutorial).
^Names are case sensitive (y and Y are different variables).
^Reserved words (like JavaScript keywords) cannot be used as names.
*/

//The "equal to" operator is written like == in JavaScript.


//~After the declaration, the variable has no value (technically it is undefined).
let carName;

carName = "Volvo"; //assignment

/*
<script>
let carName = "Volvo";
document.getElementById("demo").innerHTML = carName;
</script>
*/

// let person = "John Doe", carName = "Volvo", price = 200;  // carName compile error   let carName diye birdaha declere edemeyiz let kullaniminda
let person = "John Doe", car = "Volvo", price = 200;


//A declaration can span multiple lines:
let person1 = "John Doe",                     //Put comma   ,   between them
carName2 = "Volvo",
price2 = 200;

//~The variable AutoName will have the value undefined after the execution of this statement:
let AutoName;    


/*
Re-Declaring JavaScript Variables
!If you re-declare a JavaScript variable declared with -- var --, it will not lose its value.

The variable carName will still have the value "Volvo" after the execution of these statements:
*/
var car1Name = "Volvo";
var car1Name;               //redecleration in var possible   , in let not

// ~ You cannot re-declare a variable declared with let or const.

// & This will not work:

let car3Name = "Volvo";
//let car3Name;      //gives compile error



//As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +:

let d = 5 + 2 + 3;
let e = "John" + " " + "Doe";   //concetenation
let f = "5" + 2 + 3;


/*Doalr sign can be used as a identifier
<script>
let $$$ = 2;
let $myMoney = 5;
document.getElementById("demo").innerHTML = $$$ + $myMoney;
</script>


<script>
let _x = 2;
let _100 = 5;

document.getElementById("demo").innerHTML = _x + _100;
</script>

*/

