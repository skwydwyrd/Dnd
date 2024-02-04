// Variables and Data Types
// create a name, age, isStudent, hobbies, person(obj)
let isStudent = true;
let person = { 
    firstName:'August',
    lastName:'White',
    age:13,
    talk: function() {
        return 'Hello my name is ' + this.firstName + " " + this.lastName;
    },
    hobbies:['reading', 'drawing']
};

// display all your variables
// console.log(isStudent, person.talk())
// console.log(Object.values(person))
// console.log(hobbies.join(" | "))

// If-Else Statments
// if our person is younger 13 then print out ->
//  You are not able to watch PG-13 movies at the movies by yourself
// otherwise -> Enjoy your move firstname

if (person.age < 13){
    console.log('You are not able to watch PG-13 movies at the movies by yourself')
}
else{
    console.log('Enjoy the movie' + " " + person.firstName + '!')
}

// create a variable called address and ask the user what they live in

person.address = 'Filmore St.'
console.log(person.address)

// For-Loop Ex. 1
console.log('for loop ex. 1')
for (let i = 0; i < person.hobbies.length; i++){
    console.log(person.hobbies[i])
}
// For-Loop Ex. 2
console.log('\nfor loop ex. 2')

person.hobbies.forEach(function(x) {
    console.log(x)
})

// For-Loop Ex.3: arrow function
console.log('\nfor loop ex. 3')
person.hobbies.forEach(hobby => console.log(hobby));

// For-Loop Ex. 4: map
let numbers = [3, 6, '2', 10]
let doubledNumbers = numbers.map(number => number * 2)
console.log(doubledNumbers)


let evenNumbers = numbers.filter(number => number%2 === 0)
console.log(evenNumbers)

console.log('more info');
console.log(2 == '2'); // true
console.log(2 === '2'); //false
console.log(2 === Number('2')); // true


// Write an arrow function that takes two parameters and returns their sum.
console.log('\nadd => function')


const add = (num1, num2) =>  num1+num2

console.log(add(3,4))

// Given an array of names, use an arrow function with map to 
// create an array of the lengths of each name.
const names = ["Alice", "Bob", "Charlie"];

let nameLengths = names.map(name => name.length)
console.log(nameLengths)