console.log("javascript hello world ");

let a=4;
console.log(a);
/*  comments are same with java
//single comment
*/  

//until es5  used to store variables with var
//with es6     var   , let  and const are used to store 

//var and let are almost same but const  is alittle bit different

console.log(typeof(a));  //NUMBER        what type of data stored
let b=2.34;
console.log(typeof(b)); //number

let c="Mehmet Altuntas"
console.log(typeof(c));  //string
//let c   not allowed same declaration with let
c="teacher"   //allowed reassignment  without using let

let required=false 
console.log(typeof(required));  //boolean
console.log((!required)); //true   --> exclamatory usage
// ; is optional 

let d = a+b;   //assign
//let d   i cant redeclare
console.log(d);  //6.34
console.log(d+c);  // 6.34Mehmet Altuntas

//We cannot redeclare varibale with    let     keyword but possible with     var

//var a=5;   a is used with let  , i cant do like this
var e=5
var e= 7 //redeclaration is possible
var e=a+b;  //let ile kullanilan a ve b yi kullanabildim

console.log(e)  //6.34

//-----------------------

//const variable means constant  , reassigning not allowed
//const a   not allowed  a is used with let above
const f=5
f=6   // compilation hatasi vermez ama 6 degerini de reassignment yapmaz
console.log(f)  // uyari verir console   TypeError: Assignment to constant variable.