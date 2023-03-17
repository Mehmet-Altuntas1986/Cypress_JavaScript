
//sort() methods only sort the strings

let fruits=["banana","mango","pomegranate","apple"]
fruits.sort()  //sorts alphabetically
console.log(fruits.sort())              //[ 'apple', 'banana', 'mango', 'pomegranate' ]

//reverse order 
console.log(fruits.reverse())           //[ 'pomegranate', 'mango', 'banana', 'apple' ]
var scores=[12,013,19,16,14]
console.log(scores.sort())    //[ 12,13,19,16,14 ]   sort etdi ama herzaman etmiyor , bu methodu rakamlar icin kullanma

var scores=[5,7,2,10,8]
console.log(scores.sort())    //[ 10, 2, 5, 7, 8 ]   sort etmedi , yani guvenilir degil 

// how to sort numbers
var newScores=[12,003,19,16,14]
newScores.sort(function(a,b){
    return a-b
})
//yukaridaki islemin kisa hali
newScores.sort((a,b)=>a-b)  //butun iterative combinasyonlari deniyor , aradaki fark miktarina gore bir duzenleme yapiyor
console.log(newScores.sort((a,b)=>a-b))   //[ 3, 12, 14, 16, 19 ]

//same functionality
console.log(newScores.reverse((a,b)=>b-a))      //[ 19, 16, 14, 12, 3 ]  //a ile b nin yerini degistirince de reverse order i verir
console.log(newScores.sort((a,b)=>b-a))         //[ 19, 16, 14, 12, 3 ]