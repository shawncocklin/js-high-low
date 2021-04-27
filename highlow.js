const rs = require("readline-sync");
let startingNum = 0;
let aiNum = 0;
let playerStrikes = 0;
let playerPoints = 0;

function playGame() {
  //console.log('Game started');
  //generate a random number and assign to startingNum (separate function)
  //generate another random number to assign to the AI that does NOT equal the starting number
  const prompt = rs.question(`Is the number I am thinking of higher or lower than ${startingNum}? `, {limit: ['higher', 'lower'], limitMessage: 'Sorry, please input \'higher\' or \'lower\' '});
}

const startGame = rs.keyInYN('Would you like to play a game of High or Low?');

(!startGame) ? console.log('Ok, goodbye!') : playGame();