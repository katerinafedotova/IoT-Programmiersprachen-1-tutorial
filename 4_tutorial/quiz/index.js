// global vs local scope
let num = 42;

const getNum = () => {
  num = 1;
  return num
}

console.log(num)

// what will the console show
console.log(5 == '5')
console.log(5 === '5')
console.log(NaN == NaN)
console.log('' == 0)
console.log(!(4 === 4))
console.log((false == 0) || (5 === 6))
console.log((false == 0) && (5 === 6))

// var, let, const
function getIndex() {
  // for (let i = 0; i < 5; i++) { }
  // for (var i = 0; i < 5; i++) { }
  // for (const i = 0; i < 5; i++) { }
  console.log(i)
}
console.log(getIndex())

// conditionals: create a function to find the largest number out of 2 numbers
function findLargest(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is the largest number`)
  }
  else if (num2 > num1) {
    console.log(`${num2} the largest number`)
  }
  else {
    console.log(`${num1} is equal to ${num2}`)
  }
}
