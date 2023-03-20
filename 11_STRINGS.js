let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)


//let text1 = "We are the so-called "Vikings" from the north.";
//        Code	         Result	      Description
//               \'	       '	      Single quote
//               \"	       "	      Double quote
//               \\	       \	      Backslash

let text2 = "The character \\ is called backslash.";         //

console.log(text2)  //The character \ is called backslash.      


//~You can also break up a code line within a text string with a single backslash:
let a="Hello \
Dolly!";

console.log(a)   //Hello Dolly!



let x = "John";
let y = new String("John");   //can be used but not prefered -- it slows down program

//Note the difference between
// (x==y) means equel     and      (x===y) means not equel


let text3 = "HELLO WORLD";
let letter = text.charAt(0);
console.log(letter)              //H


let text4 = "HELLO WORLD";
let letter2 = text.charAt(text4.length-1);



let text5 = "HELLO WORLD";
let code = text5.charCodeAt(0);     //GIVES UNICODE -   72


let text6 = "sea";
let text7 = "food";
let result = text6.concat(text7);


//JavaScript String constructor

let message = "Hello World!";
let text8 = message.constructor;
console.log(text8)                      //[Function: String]


//~ fromCharCode()	Returns Unicode values as characters
let char = String.fromCharCode(65);  //A
let text9 = String.fromCharCode(72, 69, 76, 76, 79);   //HELLO

//endsWith()	Returns if a string ends with a specified value      True or false
let text10 = "Hello world";
let result2 = text10.endsWith("world");
console.log(result2)


//^  includes()	Returns if a string contains a specified value
let t = "Hello world, welcome to the universe.";
let result_ = text.includes("world");  //true



// indexOf()	Returns the index (position) of the first occurrence of a value in a string

let text11 = "Hello world, welcome to the universe.";
let result3 = text11.indexOf("welcome");


//Find the first occurrence of "e", starting at position 5:

let text12 = "Hello world, welcome to the universe.";
text.indexOf("e", 5)  //5. INDEX TE BASLA ARAMAYA VE ILK GELEN e nin index ini bul



//lastIndexOf()	Returns the index (position) of the last occurrence of a value in a string

//length	Returns the length of a string

//^localeCompare()	Compares two strings in the current locale     -1  0  1   before,  after, or equal

let txt1 = "ab";
let txt2= "cd";
let rslt = txt1.localeCompare(txt2);  //-1


let xt1 = "ab";
let xt2= "cd";
let rlt = xt1.localeCompare(xt2);   // 1


// match()	Searches a string for a value, or a regular expression, and returns the matches 
let teks = "The rain in SPAIN stays mainly in the plain";
teks.match("ain");
console.log(teks.match("ain"))

/*
~A search for "ain" using a string:
let text = "The rain in SPAIN stays mainly in the plain";
text.match("ain"); //ain


~A search for "ain" using a regular expression:
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/);  //ain

~A global search for "ain":
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g); //ain,ain,ain


~A global, case-insensitive search:
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/gi); //ain,AIN,ain,ain

*/


//^^^^^Use the prototype -property- to add a new property to all objects of a given type:^^^

function employee(name, jobtitle, born) {
    this.name = name;
    this.jobtitle = jobtitle;
    this.born = born;
  }
  employee.prototype.salary = 2000;
  
  const fred = new employee("Fred Flintstone", "Caveman", 1970);
  //document.getElementById("demo").innerHTML = fred.salary;
  //fred.  diyerek yeni property olusuturamadim

  console.log(fred.salary)   //2000

  /*
  Warning
You are not advised to change the prototype of an object that you do not control.

*You should not change the prototype of built in JavaScript datatypes like:

Numbers
Strings
Arrays
Dates
Booleans
Function
Objects
~Only change the prototype of your own objects.

*/

  
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.nationality = "English";
  let nt=new Person("ali", "ata", 24, "blue")   //object olusturunca argument yapisitirmalisin
  console.log(nt.nationality) 


  //repeat()	Returns a new string with a number of copies of a string
  let repeattext = "Hello world!";
let result5 = repeattext.repeat(2);
console.log(result5)                   //Hello world!Hello world!


//replace()	Searches a string for a value, or a regular expression, 
//and returns a string where the values are replaced

/*
          
let text = "Visit Microsoft!";
let result = text.replace("Microsoft", "W3Schools");


      global 
let text = "Mr Blue has a blue house and a blue car";
let result = text.replace(/blue/g, "red");
*/


//search   bulur ve index yazar
/*
let text = "Mr. Blue has a blue house";
let position = text.search("Blue");  //4          text.search("blue") //15

0r ayni islem

let position = text.search(/Blue/);  //4          text.search(/blue/) //15


let text = "Mr. Blue has a blue house";
let position = text.search(/blue/i);     case insensitive   //4
*/   


//~slice()	Extracts a part of a string and returns a new string
let tz = "Hello world!";
//let result = text.slice(0, 5);      from 0 to 4    , index 5 is not included

let result8 = tz.slice(3);  //lo world!   index 2 den sonraki kismi yazdirir

//split()	Splits a string into an array of substrings

let tb  = "How are you doing today?";
const myArray = tb.split(" ");
console.log(myArray)                //[ 'How', 'are', 'you', 'doing', 'today?' ]

/* 
~startsWith()	Checks whether a string begins with specified characters
let text = "Hello world, welcome to the universe.";
text.startsWith("Hello");  //true

let text = "Hello world, welcome to the universe.";
text.startsWith("world", 7); //  index 6 ile baslar buyuzden false

*/

/*substr()	Extracts a number of characters from a string, from a start index (position)
let text = "Hello world!";
let result = text.substr(1, 4); //ell
let result = text.substr(2);  //llo world!

~To extract characters from the end of the string, use a negative start position.
*/

/*
let text = "Hello world!";
let result = text.substring(1, 4); //ell
let result = text.substring(2);     //llo world!
*/

let k = "Hello World!";
let r = k.toLocaleLowerCase(); //convert to lowercase   //or use toLowerCase();
r = k.toLocaleUpperCase(); //convert to UpperCase    //returns the same result as toUpperCase()

     let u = "Hello World!";
     let ru = u.toString();
     console.log(ru)
     console.log(u)

/*
Every JavaScript object has a toString() method.

The toString() method is used internally by JavaScript when an object needs to be displayed as a text (like in HTML), or when an 
object needs to be used as a string.
*/

//~The trim() method removes whitespace from both sides of a string.

//^The trim() method does not change the original string.     trimEnd()       trimStart() da var


let w = "       Hello World!        ";
let rw = w.trim();  //Hello World!

//valueOf    -->variable degerini verir

//let text = "Hello World!";
//let result = text.valueOf();                  //Hello World!

//let text = new String("Hello World!");
//let result = text.valueOf();                  //Hello World!