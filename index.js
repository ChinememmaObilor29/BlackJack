let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let noteMsg = document.getElementById("note");
let add = document.getElementById("add");
let blackJ = document.getElementById("blackJ");
let player = {
    name: "Per",
    chips: 145
}   
// 2. Create a variable, sum, and set it to the sum of the two cards

function getRandomCard(){
    let randomNumber = Math.floor( Math.random() * 13 ) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }

}

function startGame(){
    // 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11 
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];;
    sum = firstCard + secondCard;
    displayGame();
}

function displayGame(){
    blackJ.textContent = "Cards: "
    // Create a for loop that renders out all the cards

    //    START           FINISH       STEP SIZE
for ( let i = 0;  i < cards.length;  i++)  {
    
      blackJ.textContent += " " + cards[i] + " ";

}
    
    add.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    noteMsg.textContent = message;
}

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 22;

if(age <= 20){
    console.log("You can not enter the club!");
} else{
    console.log("Welcome!");
}



function newCard() {
    console.log("Drawing a new card from the deck!")
    // 1. Create a card variable, and hard code its value to a number (2-11)
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
          // 2. Add the new card to the sum variable
        sum += card;
         // Push the card to the cards array
        cards.push(card);
        displayGame();       
    }
}

function rollDice(){
    let randomNumber = Math.floor( Math.random() * 6 ) + 1;
    return randomNumber;
}

let token = document.getElementById("token");
token.textContent = player.name + ": $" + player.chips;
