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
  circle(positionLeft, positionTop, 50)
  fill(225, 0, 0)
  moveCircleRight()

  circle(positionRight, positionBottom, 50)
  fill(0, 0, 225)
  moveCircleLeft()

  if (positionLeft === positionRight){
    isDirectionChanged = true
  }

  if (isDirectionChanged){
    positionTop = positionTop + 1
    positionBottom = positionBottom - 1
  }
}

function moveCircleRight(){
  positionLeft = positionLeft + 1
}

function moveCircleLeft(){
  positionRight = positionRight - 1
}