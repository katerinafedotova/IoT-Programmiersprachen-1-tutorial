// Object is a collection of related data and/or functionality.
const arr = [1,2,4]
const arr2 = ['num1','some1']
const user = {
    name: 'Kate',
    email: 'test@gmail.com',
    age: 20,
    phoneNumbers: ['32476398275987', '12654786358176435']
}

// the values are written as name:value pairs 
// Access property
console.log(user.email)
console.log(user['name'])

// Add property
user.surname = 'Some Surname'
console.log(user)

// Delete property
delete user.phoneNumbers
console.log(user)
