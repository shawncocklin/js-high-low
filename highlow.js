//reference to the readline-sync library
const rs = require("readline-sync");

//variables for the basic gameplay loop
let startingNum = 0;
let aiNum = 0;
let playerStrikes = 0;
let playerPoints = 0;

//functions for logic control
function getRandomNum() {
  return Math.floor(Math.random() * 100);
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
  console.log(`Correct! My number was ${aiNum}. You get 1 point!`);
  displayScore();
  startGame = rs.keyInYN('Would you like to keep playing?');
}

function addStrike(maxStrikes) {
  playerStrikes++;
  if(playerStrikes < maxStrikes) {
    console.log(`Sorry, you are incorrect. My number was ${aiNum}. That's strike ${playerStrikes}. ${maxStrikes - playerStrikes} more strikes and it's game over!`);
    displayScore();
  }
  else {
    gameOver();
  }
  
  startGame = rs.keyInYN('Would you like to keep playing?');
}

function displayScore() {
  console.log(`You currently have ${playerPoints} points!`);
}

function gameOver() {
  console.log('That\'s strike three! GAME OVER.');
  console.log(`Final score: ${playerPoints}`);
  playerPoints = 0;
  playerStrikes = 0;
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
    addStrike(3);
  }
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
