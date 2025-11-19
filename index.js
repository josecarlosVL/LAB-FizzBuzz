// FizzBuzz Javascript
//1. START
for(let i=1;i<=1000; i++){ //Initialize Loop
//2.1 DECISION Is i divisible by 15?   
if(!(i%15)){  //Checks if i can be divided by 15
//If yes
console.log("FizzBuzz"); //3.1 OUTPUT. Prints FizzBuzz
}
//If not
//2.2 DECISION Is i divisible by 5?
else if(!(i%5)){ //Checks if i can be divided by 5
console.log("Buzz"); //3.2 OUTPUT. Prints Buzz
}
//If not
//2.3 DECISION Is i divisible by 3?
else if(!(i%3)){ //Checks if i can be divided by 3
console.log("Fizz"); //3.3 OUTPUT. Prints Fizz
}
//Otherwise
else{ //The number is not divisible by 15,5 or 3
    console.log(i); //3.4 OUTPUT. Prints i
}
//4. END
}
