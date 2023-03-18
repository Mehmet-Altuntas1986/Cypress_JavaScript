const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
//Accessing Object Properties
//   ~objectName.propertyName
//or
//    ~objectName["propertyName"]

//two ways to reach
person.lastName;
person["lastName"]



//Objects can also have methods.


const person2 = {

  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;  // this refers to the person2 object.


  }

};

/*
What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

*The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

*/



/*~~
~~
If you access a method without the () parentheses, it will return the function definition:

<script>
// Create an object:
const person = {
  firstName: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object:                                           //appearance in html
document.getElementById("demo").innerHTML = person.fullName;  //function() { return this.firstName + " " + this.lastName; }
</script>
*/

//~Do Not Declare Strings, Numbers, and Booleans as Objects!
x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object

//~Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.

