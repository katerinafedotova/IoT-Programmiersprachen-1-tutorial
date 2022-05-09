// // ARRAY - used to store a list of data; you can access the values by referring to an index number.
// const array = [1, 2, 3]
// // BASIC ARRAY METHODS
// // see more methods here:
// // https://www.w3schools.com/js/js_array_methods.asp
// // https://www.w3schools.com/js/js_array_iteration.asp
// console.log(array[0])
// //ARRAY.PUSH() - adds one or more elements to the end of an array and returns the new length of the array.
// array.push(4)
// console.log('after 4 pushed', array)

// // ARRAY.LENGTH - returns the length of an array.
// console.log('length', array.length)
// // ARRAY.POP() - removes the last element of an array.
// array.pop()
// console.log('array after pop', array)

// // ARRAY.REVERSE() - reverses the order of the elements in an array.
// array.reverse()
// console.log('array after reverse', array)

// array.pop()
// console.log('array after 2nd pop', array)
// ARRAY.SORT() - sorts the elements, IMPORTANT: it sorts them as strings in alphabetical and ascending order.
// example with strings
const arrayOfNames = ["David", "Leonard", "Lois", "Dina", "Maria"]
arrayOfNames.sort()
console.log(arrayOfNames)
// example with numbers
const arrayOfNumbers = [3, 22, 4, 1, 67, 55, 3, 11, 6]

const compareFunction = (a, b) => {
    // if (a < b){
    //     return -1
    // }
    // if (a > b){
    //     return 1
    // }
    // return 0
    return a - b
}
arrayOfNumbers.sort(compareFunction)
console.log('arrayOfNumbers', arrayOfNumbers)

// ARRAY.forEach() - runs the provided function for each element in the array
// arrayOfNames.forEach((name, index) => {
//     console.log(name, index)
// })

for (let i = 0; i < arrayOfNames.length; i++) {
    console.log(arrayOfNames[i], i)
}
// ARRAY.JOIN() - The join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.‚
const listOfNames = arrayOfNames.join("|")
console.log('arrayOfNames after join', arrayOfNames)
console.log('listOfNames', listOfNames)

// 2 ways of creating a function
function doSth() {
    //do sth
}

const doSthWithArrowFunction = () => {
    //also do sth
}