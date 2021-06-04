//Notes for project
//add a .gitignore and add 'node_modules/' (without quotes) to it. That folder is generated which you want to always remove generated code from your code repository because it takes up space and increases time to download/upload

//here's your code. My changes will have a * NICK in front of it

//reference to the readline-sync library
const rs = require("readline-sync");

//variables for the basic gameplay loop
//* NICK don't need this as a global as you only use it in one function
//let startingNum = 0;
let aiNum = 0;
let playerStrikes = 0;
let playerPoints = 0;
//* NICK I feel like this should just be a global variable instead of passing it to a function
var maxStrikes = 3;

//functions for logic control
function getRandomNum() {
  return Math.floor(Math.random() * 100);
}

function getAINum(startNum) {
  //num = getRandomNum();
  //* NICK start
  let num = getRandomNum();
  while (num == startNum) {
    num = getRandomNum();
  }
  return num;
  //* NICK end
  /*if(num === startNum) {
    num = getRandomNum();
  }
  else{
    return num;
  }*/
}

function addPoint() {
  playerPoints++;
  console.log(`Correct! My number was ${aiNum}. You get 1 point!`);
  displayScore();
  startGame = rs.keyInYN('Would you like to keep playing?');
}

function addStrike() {
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
  //* NICK puting this as a normal let variable
  let startingNum = getRandomNum();
  aiNum = getAINum(startingNum);
  const prompt = rs.question(`Is the number I am thinking of higher or lower than ${startingNum}? `, {limit: ['higher', 'lower'], limitMessage: 'Sorry, please input \'higher\' or \'lower\' '});
  if ((prompt === 'higher' && aiNum > startingNum) || (prompt === 'lower' && aiNum < startingNum)) {
    addPoint();
  }
  else {
    addStrike();
  }
}

//* NICK i don't know the what the industry does with let vs var but if you are declaring a
// global, I feel like it should be var instead. I use let inside functions and stuff that isn't global
//core gameplay loop
var startGame = rs.keyInYN('Would you like to play a game of High or Low?');

while(startGame) {
  playGame();
}

if(playerPoints <= 0) {
  console.log('Goodbye!');
}
else {
  goodbye();
}