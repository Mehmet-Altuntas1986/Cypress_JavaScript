

let marks =Array(6)             //array can hold 6 element

 marks=new Array(20,30,40,12,37,100)    //store 6 elelements

var mark=[20,30,40,12,37,100];  //short way to store these elements in array
var mark=new Array(20,30,"A",12,37,100)  //long way to store
//index starts from 0

marks[0]; //20   first elelment
console.log(marks[4]);


mark.length   // gives the number of elelments in array

mark.length
console.log(mark.length); //6

//push(value)   appends new elelments to an array
mark.push(65)
console.log(mark)

//pop(value)      delete last element from array

console.log(mark.pop())  //65

//add an elelmnt in the first order of the array with unshift() method
mark.unshift(12)
console.log(mark.unshift(12))
console.log("************");
console.log('************');
console.log(mark);
//write any value inside array to see its index by using indexof() method

console.log(mark.indexOf(12));  //0  first element

//****  how to check whether the element is present in array     includes() method --> true false

console.log(mark.includes(65)); //false
console.log(mark.includes(12)); //true

console.log(mark.includes(12 | 40)); //false        | tekli or operator calismiyor
console.log(mark.includes(12 || 40)); //true        || cift olacak sekilde kullanilabilir

console.log(mark.includes(12 & 40)); //false      & operator kullanma
console.log(mark.includes(12 && 40)); //false


//slice(a,b)  prints the characters between indexes -->  starts from index a to index b  , b is not included 
console.log(mark.slice(2 ,6))   // index 2,3,4,5  i yazdirir
//submark=mark.slice(2 ,6) 
// mark in onunde var vardi , asagida bu sekilde yapinca submark i default olarak var yapar  --yeni variable ismi oldu
submark=mark.slice(2 ,6) //=mark.slice(2 ,6)     //submark i default olarak  var olarak atar  -- inteligence 
console.log(submark) 


console.log("'''''''***********'''''''") 

for (let i=0;i<mark.length;i++){
    console.log(mark[i])
}

//write sum of all elelments
var mark=[20,30,40,12,37,100];
var sum=0;
for (let i=0;i<mark.length;i++){
    console.log(mark[i])

    sum=sum+mark[i]
}
console.log(sum)


console.log("********************")

//reduce filter map  --yuakridaki for loop ta yaptigimizin aynisini yapar -- 2 tane argument kabul eder

var mark=[20,30,40,12,37,100];
var sum=0;
let total=mark.reduce( (sum,mark) =>sum+mark,0 )



