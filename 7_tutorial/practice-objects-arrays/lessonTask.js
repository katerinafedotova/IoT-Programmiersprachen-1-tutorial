// 1) Imitate a to-do list: create an array of 3 objects
// each object should have 3 fields: "task" (a string (e.g., "Buy bread")), "person"(a string (e.g., "David")), "done" (boolean (true or false))
const todos = [
    {
        task: "Buy bread",
        person: "Maria",
        done: false
    },
    {
        task: "Clean the house",
        person: "David",
        done: true
    },
    {
        task: "Wash the car",
        person: "Andry",
        done: false
    }
]
console.log('initial todos ', todos)

// 2) Create a function "addToDo" that accepts a new todo object and adds it to our todos array
function addToDo(todo) {
    todos.push(todo)
}

// 3) Call this function with a new toDo object 
addToDo({
    task: "Walk the dog",
    person: "Andry",
    done: true
})

console.log('todos after add ', todos)

// 4) Create a function "addId": 
// inside this function loop through todos array using "Array.forEach" function
// add a new field: "id" to each object and assign to it the index
function addId() {
    todos.forEach((todo, index) => {
        todo.id = index
    })
}

// 5) Call this function
addId()

console.log('todos with index ', todos)

// 6) Reverse the array
todos.reverse()

console.log('array reversed ', todos)

// 7) Remove the last element from the array
todos.pop()

console.log('last elem removed ', todos)

// 8) Console.log the length of your todos array
console.log('todos length', todos.length)

// 9) Create a function "deletePersonField": use "for loop" and delete the field "person" from all the objects
function deletePersonField() {
    for (let i = 0; i < todos.length; i++) {
        delete todos[i].person
    }
}
// 10) Call this function
deletePersonField()

console.log('delete person ', todos)
