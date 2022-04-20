// Task 1: Create a function to console.log all the numbers from 0 to 10 using while loop OR for loop
// function getNumbers() {
//     for (let i = 0; i <= 10; i++) {
//         console.log(i)
//     }
// }

// getNumbers()
// let num = 1
// while(num <= 10){
//     console.log(num)
//     num++
// }


// Task 2: Create a function that takes in an array of numbers as an argument and console.log only even numbers (use for loop)
// const arr = [1, 2, 3, 5, 6]
// function evenNumbers(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i])
//         }
//     }
// }

// evenNumbers(arr)

// Task 3: Create a function that takes in an array of numbers and console.log the array in the reverse order
const arr = [1, 2, 3, 5, 6]
// arr.reverse()
// console.log(arr)

function getReverseNumbers(arr){
    for (let i = arr.length - 1; i>=0; i-- ){
        console.log(arr[i])
    }
}

getReverseNumbers(arr)
