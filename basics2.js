//const flag   // bir deger vermezsen compilation fails
const flag=true
if(!flag){      //flag a reassignment yapmadigi icin hata vermez
console.log("condition satisfied")
}else if(flag==true){
console.log("condition is not satisfied")

}else{
console.log(flag)
}


let i=0 
while(i<10){
    console.log("i am inside while loop")
i++     
console.log(i)                                               //i =i+1       from 1 to 10 writes
}
console.log(i)  //10

//do while loop  -- in first cycle there is no condition check

do{
i++
}while(i<10)
console.log(i)  //11


//for loop


for(let k=0;k<10;k++){
    if(k%2==0){
    console.log(k)           //0 2 4 6 8 10
    }
}

console.log("***********")


for(let k=0;k<10;k++){
    if(k%2==0 && k%5==0){
    console.log(k)           //0 
    }
}

console.log("***********")
for(let k=0;k<10;k++){
    if(k%2==0 || k%5==0){
    console.log(k)           //0 2 4 5 6 8 
    }
}


//while loop da increment yapmasak bile run olur , condition onemli

let story =true
while(story){
    console.log(story)
    story=false                   //reassignment  --- it goes out of the loop
}

let n=0
console.log("***********")
for(let k=0;k<10;k++){
    if(k%2==0 || k%5==0){
    console.log(k)  
           n++
           if(n==3)       //if there is only one statement , without curly braces i can do
            break                //go out of the loop  -- breaks the loop
           

    }
} 