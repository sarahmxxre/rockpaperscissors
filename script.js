function rpsGame(yourChoice) {
    console.log('Human Choice:', yourChoice.id);
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer Choice:', botChoice);
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];

}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'You lost!', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'};
    } else {
        return {'message': 'You won!', 'color': 'green'};
    }
        }

var imagesDatabase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src

}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    document.getElementById('rock').style.display = 'none';
    document.getElementById('paper').style.display = 'none';
    document.getElementById('scissors').style.display = 'none';

var humanDiv = document.createElement('div');
var botDiv = document.createElement('div');
var messageDiv = document.createElement('div');

humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150'>"
messageDiv.innerHTML = "<h1 style ='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150'>"


document.getElementById('flexbox-rps-div').appendChild(humanDiv);
document.getElementById('flexbox-rps-div').appendChild(messageDiv);
document.getElementById('flexbox-rps-div').appendChild(botDiv);

}

function resetGame() {

    let dynamicElements = document.querySelectorAll("#flexbox-rps-div > div, #flexbox-rps-div > button");
    dynamicElements.forEach(function(element) {
        element.remove();
    });


    document.getElementById('rock').style.display = 'block';
    document.getElementById('paper').style.display = 'block';
    document.getElementById('scissors').style.display = 'block';
}
