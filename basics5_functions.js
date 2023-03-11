
//var is in global level functional  ---method icinde hicbir etkisi yok , method icinde print de etmez

//let is global level + block level  -- her ikisindede visible

function add(a,b){   //parametre koyarsan return u kullanmalisin
    return a+b
   
}
//call function
let sum=add(2,3)
console.log(sum)  //5

console.log("------------------------------------------------")

//another way function -- anonyms   nameless functions
let sumOfIntegers=function(c,d) 
{
    return c+d
}

//ayni seyi function ifadesi ni temsil eden => bu isaretle de yapabiliriz ve functioni yazmayiz

let sumOfNumbers=(c,d)=>           //ayni name let kullanilinca iki kere declare edilemez , bu yuzden farkli isim verdim
{
    return c+d
}
console.log(sumOfNumbers(3,4))  //7



console.log("------------------------------------------------")


//dahada basitlestirelim  RETURN VE CURL BRACES larida cikarabiliriz

let Toplam=(c,d)=> c+d      

console.log(Toplam(3,4))   //7


//lets learn scope a little bit

//var declaration eger method haricinde bir yerdeyse -- global olarak algilanir

var greet="evening"
if(1==1) {  var greet="afternoon"}    //if bir method degil , yani var icin global   (let icin degil)

console.log(greet)  //afternoon   


console.log("------------------------------------------------")


//birde method icinde deneyelim

function add (a,b){
return a+b
    var greet="morning"
    console.log (greet)  //print etmez
}
console.log (greet) //afternoon   --> yani method blogunun icindekini algilamamis
console.log(add(3,4)) //7


//scope for  let  -->  local block{}  + global (method disi )   her ikisindede visible

let a="abc"
if(true){
    let a="def"  
    console.log(a)   //def     --> local olan a yi algilar declaration dan dolayi
}
console.log(a)  //abc    ---> global olan a yi algilar 


let b="abc"
if(true){
    b="def"            //declaration yok   ,yani b globala ait 
}
console.log(b)  //def    --> global i algilar

//const variable cannot be reinitialized   , only difference with let