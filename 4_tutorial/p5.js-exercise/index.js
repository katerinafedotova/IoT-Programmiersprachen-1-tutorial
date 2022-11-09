let positionLeft = 0
let positionRight = 0
let positionTop = 0
let positionBottom = 0
let isDirectionChanged = false

function setup() {
  createCanvas(800, 800);
  positionRight = width;
  positionTop = positionBottom = height / 2
}

function draw() {
  background(1, 200, 100)
  createCircle(color(220,10,10), positionLeft, positionBottom)
  createCircle(color(10,10,220), positionRight, positionTop)
  moveCircleRight()
  moveCircleLeft()

  if (positionLeft === positionRight){
    isDirectionChanged = true
  }

  if (isDirectionChanged){
    positionTop = positionTop + 1
    positionBottom = positionBottom - 1
  }
}

function createCircle(color, positionX, positionY){
  fill(color)
  circle(positionX, positionY, 50)
}

function moveCircleRight(){
  positionLeft = positionLeft + 1
}

function moveCircleLeft(){
  positionRight = positionRight - 1
}