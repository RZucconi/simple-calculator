//Soluce de Basile

const random = Math.floor(Math.random() * 100) + 1;
console.log(random);

const playerName = prompt ("What's your name ?");

guessNumber(random, playerName);

function guessNumber(numberToGuess, playerName = prompt("Your name please")) {
    let playerNumber = +prompt("Give me a number between 1 and 100");
    //amélioration de UX avec une condition qui renvoie au 
    //début si le nombre ne correspond pas aux critères requis.
    if (playerNumber === 0 || playerNumber > 100) {
        console.log("Invalid number, your number must be between 1 and 100")
        guessNumber(numberToGuess, playerName);
    }

    if (playerNumber === numberToGuess) {
        console.log(` ${playerName} wins!!!`);
    }
    
    if (playerNumber > numberToGuess) {
        console.log("It's less !");
        guessNumber(numberToGuess, playerName);
    } else if (playerNumber < numberToGuess) {
        console.log("it's more !");
        guessNumber(numberToGuess, playerName);
    }
}

