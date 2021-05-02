# js-high-low
RULES:
  1. The console will ask if you want to play a game of higher or lower
    a. If you input (y), the game will start
    b. If you input (n), the console will bid you farewell
  2. A random number will be displayed by the console, and the console will choose another random number
  3. The console will ask if you think their number is higher or lower than the displayed number
    a. The only inputs that the console will accept is 'higher' or 'lower'. This is NOT case sensitive
  4. If the guess is correct, the console will award you a point
  5. If the guess is wrong, the console gives you a strike
  6. After each round, you will be asked if you would like to continue. Takes (y) or (n) for inputs
  7. You can win points indefinitely, but can only receive 3 strikes
  8. After the 3rd strike, you are given a game over message and the final score, and the console bids you farewell

FUNCTIONALITY TO BE ADDED:
  1. 

KNOWN BUGS:
  1. The display number and the AI number can sometimes be 0. My original method of preventing 0 from being an option did not work, and in one case resulted in the AI choosing an undefined value for a number. Does not affect overall playability, essentially is a free point for the player any time the display number is 0.
  2. Some of the console logs related to the player score can be grammatically weird  

REPORTED BUGS:
  1. Please describe any bugs below: