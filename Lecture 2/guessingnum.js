let num = 47;
let tries = 1;
let user_guess = prompt("Enter your guess (1-100 : ");
while( num != user_guess){
    console.log("Wrong Guess! Guess Again.");
    tries++;
    user_guess = prompt("New Guess : ");

}
console.log("You Guessed correctly!.");
console.log("No. of tries : ",tries);
console.log("Correct No. : ",num);