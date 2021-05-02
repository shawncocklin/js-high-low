//reference to the readline-sync library
const rs = require("readline-sync");

//variables for the basic gameplay loop
let startingNum = 0;
let aiNum = 0;
let playerStrikes = 0;
let playerPoints = 0;

//functions for logic control
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
  displayScore();
}

function addStrike() {
  playerStrikes++;
  console.log(`Sorry, you are incorrect. That's strike ${playerStrikes}. ${3 - playerStrikes} more strikes and it's game over!`);
  displayScore();
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

function goodbye() {
  console.log(`Final score: ${playerPoints}`);
  console.log('Goodbye!');
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

  startGame = rs.keyInYN('Would you like to keep playing?');
  
}

//core gameplay loop
let startGame = rs.keyInYN('Would you like to play a game of High or Low?');

while(startGame) {
  playGame();
}

if(playerPoints <= 0) {
  console.log('Goodbye!');
}
else {
  goodbye();
}
