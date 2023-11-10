/*
function game(num_rounds) {
    for (let i = 0; i < num_rounds; i++) {
        let playerChoice = prompt('Please select Rock, Scissors, or Paper:')
        playRound(playerChoice)
    }
}
*/

const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', function() {
    playRound('Rock');
});

const paperBtn = document.querySelector('#paperBtn');
rockBtn.addEventListener('click', function() {
    playRound('Paper');
});

const scissorsBtn = document.querySelector('#scissorsBtn');
rockBtn.addEventListener('click', function() {
    playRound('Scissors');
});

function playRound(playerChoice) {
    playerChoice = firstLetterCaps(playerChoice);
    computerChoice = getComputerChoice();

    if (playerChoice == computerChoice) {
        result = `Tie! You both chose ${playerChoice}. So unsatisfying!`;
    }
    else if (playerChoice == 'Rock') {
        if (computerChoice == 'Paper') {
            result = 'You lose! Paper covers Rock!';
        }
        else {
            result = `You win! Rock smashes Scissors!`;
        }
    }
    else if (playerChoice == 'Paper') {
        if (computerChoice == 'Scissors') {
            result = 'You Lose! Scissors cuts that paper all up!';
        }
        else {
            result = 'You Win! Paper covers that Rock right up!';
        }
    }
    else if (playerChoice == 'Scissors') {
        if (computerChoice == 'Rock') {
            result = 'You Lose! Rock smashes your scissors big time!';
        }
        else {
            result = "You win! Your scissors cut up the computer's paper";
        }
    }

    return result;
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