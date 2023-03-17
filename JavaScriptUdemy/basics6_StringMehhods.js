//boyle yapinca basics8 deki class ile object olusturabiliriz burada  -- en asagida object olusturduk
const Person=require('./basics8_class')              //' '  tekli kullan , double burda kullanma

let day="tuesday"   //' ' can be used

console.log(day[1]) //   gives chracter in index 1
 
console.log (day.length) //7
console.log (day.slice(2,5)) //esd      index 5 excluded

let day1="Monday " //one space in string
let funDay= day1+" is fun day"                 //concatenation
console.log(funDay)
let sp=day1.split("n")  //[ 'Mo', 'day' ]
console.log(sp[0])  //Mo
console.log(day1[0])  //M

//trim  Stringin onunde veya arkasinda bosluk varsa onu siler , ortada silme islemi yapmaz
let tr=day1.trim()
console.log(tr)  //Monday     "Monday" gibi oldu ,artik bosluk yok

let b= "  lets go  "
console.log(b)          //    __lets go __boluklarida print eder
console.log(b.trim())  //     lets go

console.log(b.length)          //11
console.log(b.trim().length)   //7

//subtraction with strings is not possible

let x="45"
let y="15"
console.log(x-y) //40  //String olmasina ragmen  minus da dogru , plus da 4515 (concetenation yapti) yanlis hesapliyor , guvenilir degil

//peki nasil

console.log(parseInt(x) +parseInt(y))  //60


let diff= parseInt(x) - parseInt(y)
console.log(diff)  //30

diff.toString()  //changes it to string


let str=diff.toString()   //str is now string

let aDay="tuesday"
let funnydAY=aDay+" IS REALLY FUNday"    //tuesday IS REALLY FUNday

console.log(funnydAY)                 //tuesday IS REALLY FUNday

console.log(funnydAY.indexOf("day"))   //4    day 4 index i ile basliyor


 //21 --> day den 2 tane var  , 5. indexten basla aramaya sonra gelen day in index ini bul
 //bulamazsa baska bir day , consolda -1 yazdirir

console.log(funnydAY.indexOf("day",5))  


let count=0
let apple="eat apple  apple apple"

let val=apple.indexOf("lp")  //-1
let vaybe=apple.indexOf ("pl")
console.log(apple.indexOf("lp"))   //eger lp yoksa consolda -1 yazdirir
//it continues until condition is false
while(vaybe!=-1){
    count++
    vaybe=apple.indexOf("pl",vaybe+1)  //gut logic
}
console.log(count)  //3 tane pl var

/*
to access the another file  (" double quotes kullanma require kisminda")

1.adimda        module.exports=class Person{                           basics8_class     file
2.adimda        const Person=require('./basics8_class')                basics6_StringMethods file

sonra object olusturdu ve diger file daki verielri kullanabildi
*/
let prs=new Person("Tim"," joseph")
console.log (prs.age)
console.log(prs.fullName())