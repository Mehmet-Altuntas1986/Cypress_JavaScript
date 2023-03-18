// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
    return p1 * p2;
  }

  let x=myFunction(2, 3)
  console.log(x)   //Function Invocation


  
 /*

  function name(parameter1, parameter2, parameter3) {
  
  --HERE--  code to be executed
  }

  */

  /*
        ~   Function Invocation  ~
The code inside the function will execute when "something" invokes (calls) the function:

When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked)
 



<script>
function toCelsius(f) {
  return (5/9) * (f-32);
}
document.getElementById("demo").innerHTML = toCelsius(77);  //25   element text kismina direkt olarak method() u cagirdi
</script>

!Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.


let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";


^^^Variables declared within a JavaScript function, become LOCAL to the function.

^^^Local variables can only be accessed from within the function.
*/

// code here can NOT use carName

let l=5;

//console.log(carName)
function myFunction() {
    let carName = "Volvo";
    let l=4;             //bu line daki l ile line 52 deki l farkli l ler  , burda l=4 dersek --> cannot access it
    // code here CAN use carName
    console.log(carName)                    //volvo
}
  console.log(l)                            //5     
  console.log(carName)                      //undefined
  // code here can NOT use carName



/*
Why Functions?
You can reuse code: Define the code once, and use it many times.

You can use the same code many times with different arguments, to produce different results.
*/

//