/*
function game(num_rounds) {
    for (let i = 0; i < num_rounds; i++) {
        let playerChoice = prompt('Please select Rock, Scissors, or Paper:')
        playRound(playerChoice)
    }
}
*/

let playerWins = 0;
let cpuWins = 0;
let draws = 0;

const scoreboard = document.querySelector('#scoreboard');
score = `Player Wins: ${playerWins}  -  CPU Wins: ${cpuWins}  -  Draws: ${draws}`
scoreboard.textContent = score;

const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', function() {
    result = playRound('Rock');
    msg = result[0];
    scoreArray = result[1];
    updateMatch(msg, scoreArray);
    checkMatchEnd();
});

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', function() {
    result = playRound('Paper');
    msg = result[0];
    scoreArray = result[1];
    updateMatch(msg, scoreArray);
    checkMatchEnd();
});

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', function() {
    result = playRound('Scissors');
    msg = result[0];
    scoreArray = result[1];
    updateMatch(msg, scoreArray);
    checkMatchEnd();
});

function updateMatch(msg, scoreArray) {
    const update = document.querySelector('#update')
    update.textContent = msg;
    playerWins = playerWins + scoreArray[0];
    cpuWins = cpuWins + scoreArray[1];
    draws = draws + scoreArray[2];
    score = `Player Wins: ${playerWins}  -  CPU Wins: ${cpuWins}  -  Draws: ${draws}`;
    scoreboard.textContent = score;
}

function checkMatchEnd() {
    if (playerWins >= 5) {
        alert('The human defeats the machine!! You outsmarted the random number machine');
    }
    else if (cpuWins >= 5) {
        alert('The computer wins!! All hail the machine overlords');
    }
}

function playRound(playerChoice) {
    playerChoice = firstLetterCaps(playerChoice);
    computerChoice = getComputerChoice();

    if (playerChoice == computerChoice) {
        resultMsg = `Tie! You both chose ${playerChoice}. So unsatisfying!`;
        resultArray = [0, 0, 1];
    }
    else if (playerChoice == 'Rock') {
        if (computerChoice == 'Paper') {
            resultMsg = 'You lose! Paper covers Rock!';
            resultArray = [0, 1, 0];
        }
        else {
            resultMsg = `You win! Rock smashes Scissors!`;
            resultArray = [1, 0, 0];
        }
    }
    else if (playerChoice == 'Paper') {
        if (computerChoice == 'Scissors') {
            resultMsg = 'You Lose! Scissors cuts that paper all up!';
            resultArray = [0, 1, 0];
        }
        else {
            resultMsg = 'You Win! Paper covers that Rock right up!';
            resultArray = [1, 0, 0];
        }
    }
    else if (playerChoice == 'Scissors') {
        if (computerChoice == 'Rock') {
            resultMsg = 'You Lose! Rock smashes your scissors big time!';
            resultArray = [0, 1, 0];
        }
        else {
            resultMsg = "You win! Your scissors cut up the computer's paper";
            resultArray = [1, 0, 0];
        }
    }

    let retArray = [resultMsg, resultArray]

    return retArray;
}

function getComputerChoice() {
    let rand = Math.random();
    if (rand < 0.33) {
        computerChoice = 'Rock';
    }
    else if (rand < 0.66) {
        computerChoice = 'Paper';
    }
    else {
        computerChoice = 'Scissors';
    }

    return computerChoice;
}

function firstLetterCaps(textStr) {
    lenStr = textStr.length;
    firstLetter = textStr[0].toUpperCase();
    restOfWord = textStr.slice(1, (lenStr));
    restOfWord = restOfWord.toLowerCase();
    newStr = `${firstLetter}${restOfWord}`
    
    return newStr
}