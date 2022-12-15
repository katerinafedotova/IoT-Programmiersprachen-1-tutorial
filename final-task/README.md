# 15 puzzle
You will implement the classical 15 Puzzle Game https://en.wikipedia.org/wiki/15_puzzle 

## About
The 15-puzzle is a well-known game which has a long history stretching back in the 1870's. The goal of the game is to arrange a shuffled set of 15 numbered tiles in ascending order, by sliding tiles into the one vacant space on a 4 × 4 grid.

## Functionality
### Basic 
- on game load you display a playing field 4x4 with 15 numbered tiles inside 
- the playing field state is randomly generated: there is a button "START", when you click on it, the numbers on the tiles are shuffled
- when you click on a tile standing next to an empty cell, the tile is moved to the empty cell
- you provide your own design and it is adaptive: when you switch among different screen sizes(desktop, tablet, mobile), everything should be displayed correctly, nothing should disappear or go beyond the screen.

### Intermediate
- the game can be restarted without reloading the page (e.g., add a button "RESTART" and run some function on click or use keyboard shortcuts)
- when you start a game, the timer starts and you can see duration in minutes and seconds "##:##"
- you count number of moves and display it 
- the tiles can be moved to an empty cell through drag & drop
- some message is shown with number of moves and time at the end of the game, e.g., "CONGRAAATS!!  You have solved the puzzle in ##:## and N moves" 

### Hard
- choice of playing field: from 3x3 to 8x8
- sound effect on tile move + possibility to turn it on/off on click of a button
- table of results is accessible on click of a button, where you display number of moves, time and e.g. user name or date when game took place (results are saved in localStorage)

### Tooo hard to do but we still add it :D 
- Instead of numbers on the tiles display a part of a picture (you can also display it together with numbers): so the goal will be to move the tiles to assemble a picture correctly
- animate game solving process (for 3x3 field at least): in case you don't know how to solve the puzzle, you press a button, e.g. "Solve", and the tiles will slowly go in the right position STEP BY STEP so that you can observe the whole process. 

## Important
- Do development in a separate branch and make a PR to `main` at the end 
- Commit small features and make good commit messages https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/
