let firstCard=6
let secondCard=9

let sum = firstCard + secondCard

// console.log(sum)
if(sum < 21) {
    console.log("do u want to draw a new card?")
} else if (sum === 21) { //scrict equal
    console.log("Wohoo! You have got BlackJack")   
} else if (sum > 21) {
    console.log("You're out of the game")
}