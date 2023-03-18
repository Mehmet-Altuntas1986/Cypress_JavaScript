/*
Operator	Example	Same As
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y            **	Exponentiation (ES2016)  ==>UST ALMA 

*/
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;

/*
JavaScript Comparison Operators
Operator	Description
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator

*/


/*
JavaScript Logical Operators
Operator	Description
&&	logical and
||	logical or
!	logical not
*/


/*
JavaScript Bitwise Operators
Bit operators work on 32 bits numbers.

Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.
Operator	Description	               Example	      Same as	        Result	    Decimal
&	          AND	                    5 & 1	      0101 & 0001	    0001	         1
|	          OR	                    5 | 1	      0101 | 0001	    0101	         5
~	          NOT	                    ~ 5	         ~0101	            1010	         10
^	          XOR	                    5 ^ 1	      0101 ^  0001	    0100	          4
<<	        left shift	                5 << 1	      0101 << 1	        1010	         10
>>	        right shift	                5 >> 1	      0101 >> 1	        0010	          2
>>>	      unsigned right shift	        5 >>> 1	      0101 >>> 1	     0010	           2


The examples above uses 4 bits unsigned examples. But JavaScript uses 32-bit signed numbers.
Because of this, in JavaScript, ~ 5 will not return 10. It will return -6.

*/

//alert(10 * 5);    //ReferenceError: alert is not defined

/*
JavaScript can "display" data in different ways:

Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log().
*/

let l= 2**4;    //16
console.log(l)

/*
The ??= Operator
The Nullish coalescing assignment operator is used between two values.

If the first value is undefined or null, the second value is assigned.
let text1 = "What a very ";
text1 += "nice day";

Nullish Coalescing Assignment Example
let x = 10;
x ??= 5;       //x defined yani deger almis  -- bu durumda x=10 olur   ama let x; deseydik   x=5 olurdu
*/