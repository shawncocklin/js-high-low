const rs = require("readline-sync");
let startingNum = 0;
let aiNum = 0;
let playerStrikes = 0;
let playerPoints = 0;

function getRandomNum() {
  return Math.floor(Math.random() * ((100 - 1) + 1));
}

function getAINum(startNum) {
  num = getRandomNum();
  if(num === startNum) {
    num = getRandomNum();
  }
  else{
    return num;
  }
}

function addPoint() {
  playerPoints++;
  console.log('Correct! You get 1 point!');
}

function addStrike() {
  playerStrikes++;
  console.log(`Sorry, you are incorrect. That's strike ${playerStrikes}. ${3 - playerStrikes} more strikes and it's game over!`)
  if (playerStrikes >= 3) {
    gameOver();
  }
}

function displayScore() {
  console.log(`You currently have ${playerPoints} points!`);
}

function gameOver() {
  console.log('That\'s strike three! GAME OVER.');
  startGame = false;
}

function playGame() {
  startingNum = getRandomNum();
  aiNum = getAINum(startingNum);
  const prompt = rs.question(`Is the number I am thinking of higher or lower than ${startingNum}? `, {limit: ['higher', 'lower'], limitMessage: 'Sorry, please input \'higher\' or \'lower\' '});
  if ((prompt === 'higher' && aiNum > startingNum) || (prompt === 'lower' && aiNum < startingNum)) {
    addPoint();
  }
  else {
    addStrike();
  }
  displayScore();
}

const startGame = rs.keyInYN('Would you like to play a game of High or Low?');

//(!startGame) ? console.log('Ok, goodbye!') : playGame();
while(startGame) {
  playGame();
  
}