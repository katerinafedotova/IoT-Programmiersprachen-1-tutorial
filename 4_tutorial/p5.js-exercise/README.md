# Exercise with p5.js
With this exercise we will practice use of variables, datatypes, conditionals and functions.

## Live example
https://p5js-exercise.vercel.app/

## Task description
The idea is to have the following logic working: you create 2 circles that start moving horizontally from the opposite corners towards each other. As soon as they meet, change the directions of circles so that they move vertically also in the opposite directions.

<details>
<summary> Step-by-step logic (contains SPOILERS) </summary>
1. Create 2 circles with different colors(further *green circle*  and *purple circle* )
<br>
2. Position Y for both - half of the canvas height. Position X for green circle is 0, position X for purple circle is canvas width.
<br>
3. Make green circle move by 1 to the right. Make purple circle move by 1 to the left. As a result, 2 circles should meet halfway and finally reach opposite X positions.
<br>
4. Once 2 circles meet (share the same X value), start updating Y position by 1: for green circle Y position value should go up, for purple circle it should go down. 
</details>
