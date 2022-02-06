const moves = ['Rock', 'Paper', 'Scissors']

function computerPlay (){
    return moves[Math.floor(Math.random() * moves.length)];
}

function playRound (playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === computer){
        return 0;
    }
    else if ((player === "rock" && computer === "scissors") ||
             (player === "scissors" && computer === "paper") ||
             (player === "paper" && computer === "rock")) {
                 return 1;
             }    
    else {
        return -1;
    }
}

function game () {
    let playerTotal = 0;
    let computerTotal = 0;

    //playing the game until someone reaches 5 wins
    while (playerTotal <5 && computerTotal < 5){
        const playerMove = prompt("Rock, Paper, or Scissors?");

        const result = playRound(playerMove, computerPlay())

        if(result === 0){
            console.log(`It\'s a tie! The score is ${playerTotal} to ${computerTotal}` );
        } else if(result === 1) {
            playerTotal = ++playerTotal;
            console.log(`Lets goooooooo! The score is now ${playerTotal} to ${computerTotal}`);
        } else {
            computerTotal = ++computerTotal;
            console.log(`Can\'t win them all... The score is now ${playerTotal} to ${computerTotal}`);
        }
    }

    //determing the winner
    if(playerTotal > computerTotal){
        console.log('Winner, winner, chicken dinner!');
    } else {
        console.log('Hit the showers, kid.');
    }
}