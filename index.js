const moves = ['rock', 'paper', 'scissors']
var wins = 0;
var losses = 0;
var gameOver = false;

function computerPlay (){
    return moves[Math.floor(Math.random() * moves.length)];
}

function playRound (userInput){
   
    gameComplete();

    if(gameOver){
        return;
    }

    const computer = computerPlay();

    if(userInput == computer){
        console.log("It's a tie")
    }
    else if(computer == 'rock' && userInput == 'paper' ||
            computer == 'paper' && userInput == 'scissors' ||
            computer == 'scissors' && userInput == 'rock'){
                document.getElementById("human").innerHTML = wins+1;
                wins++;
            }
    else {
        document.getElementById("alien").innerHTML = losses+1;
        losses++;
    }
}

function gameComplete() {
    if(wins === 5 || losses === 5){
        alert("Game Over!");
        gameOver = true;
    }
    else {
        return;
    }
}

//on a click of the button it should
//1. get the type of what was clicked
//2. play the game against the computer
//3. update the scoreboard

const button = document.querySelectorAll('button');
button.forEach((button) => {
    button.addEventListener('click', function(e) {
        playRound(e.srcElement.className);
    });
 });