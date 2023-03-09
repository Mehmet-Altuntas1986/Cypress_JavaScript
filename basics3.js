

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
console.log(sum)  //239


console.log("********************")

//reduce filter map  --yuakridaki for loop ta yaptigimizin aynisini yapar -- 2 tane argument kabul eder

var mark=[20,30,40,12,37,100];

//sum+mark istedigimiz operation -- farklida yazabilirdik
let total=mark.reduce( (sum,mark) =>sum+mark,0 )    // virgulden sonraki kisim sum in ilk degeri olarak assign edilir
//javadaki for each dongusune benzer bir sekilde mark array inin icindekiler teker teker bir donguye dahil olur

console.log(total)  //239


console.log("********************")

//name can be changes it is not problem   sum and a are arguments
//mark.reduce dedigimiz icin  mark array inin icindeki degerler bir donguyle teker teker a argumenti olacak
//virgulden sonraki kisim sum argumentinin ilk dongu baslamadan onceki degeridir

var mark=[20,30,40,12,37,100];
let total2=mark.reduce( (sum,a) =>sum+a,1 ) 
console.log(total2)  //240


//another example  -- create new array with even numbers from the array below  
var score=[12,13,14,16]
console.log("*************")

var evenscores=[]   //bo bir array olusturduk
for(let i=0;i<score.length;i++){
    if (score[i]%2==0){
        evenscores.push(score[i])            //push methodu ile en sona bir element ekliyorduk array de
    }
}
console.log(evenscores)

console.log("********************+")

// yukaridakinin aynisini filter() methodu ile yapalim   --short way

var scores=[12,13,14,16]
//in filter condition is important
scores.filter(scorlar=>scorlar%2==0)  // scorlar  array in icindekiler (dongu)  //ok un sagindaki kosul  -->kosulu saglayanlari print eder
let newFilterEvenscores=scores.filter(scorlar=>scorlar%2==0) 

console.log(newFilterEvenscores)  //[ 12, 14, 16 ]

//map array ile yukaridaki degerlerin herbirini 3 ile carpip map arrayin in icine koyalim

//no condition  -- each element will get an operation with the statement in the right side of => this sign
let mappedArray=newFilterEvenscores.map(score=>score*3)  //map filtreleme yapmiyor , herbir degeri okun karsinindaki ile islem yapip yeni maparray in icine koydu
console.log(mappedArray) // 36, 42, 48 ]

//simdi yine elemntleri toplama islemini yapalim reduce methodu ile

let totalSumElements =mappedArray.reduce((sum,values)=>sum+values,0)    //iteration    0 sum in ilk degeri

/*   
sum=sum+values   herbir dongude sum degerleri degisiyor
first iteration de 36 geldi  -->   sum=0+36     
second iteration  de 42 geldi  -->   sum=36+42
third iteration  de 48 geldi  -->   sum=78+48     -- 126    
*/
console.log(totalSumElements)   //126

//hadi biraz daha eglenelim
var score1=[12,13,14,15]
let sumValue=score1.filter(score=>score%2==0).map(score=>score/2).reduce((sum,valuesInArray)=>sum+valuesInArray,0)

console.log(sumValue)  //13