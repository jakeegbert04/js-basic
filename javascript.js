
/* 

1) Call startsWith and endsWith on the provided string to make them true.
const testString = "We can't stop here, this is bat country!"

*/

const testString = "We can't stop here, this is bat country!"
console.log(testString.startsWith('We'),testString.endsWith('try!'))

/*
2) 
const stringOne = "The dog meows"

const replacedString =  // replace the word dog with cat

const stringTwo = "The cow jumped over the moon"

const indexOfOver =  // get the index of over from stringTwo

const stringThree = "Never gonna give you up never gonna let you down"

const lastIndex = // get the last index of never from stringThree  
*/

const stringOne = "The dog meows";
const replacedString = stringOne.replace('dog', 'cat');

console.log(stringOne, replacedString)

const stringTwo = "The cow jumped over the moon";
const indexOfOver = stringTwo.indexOf('over');

console.log(indexOfOver)


const stringThree = "Never gonna give you up never gonna let you down";
const lastIndex = stringThree.lastIndexOf('never');

console.log(lastIndex)

/*
3) Fill in the appropriate arthmetic operator to match the ouput
let one = 5 10 // => 15
let two = 90 3 // => 30
let three = 50 25 // => 25
let four =  20 5 // => 100
*/
let one = 5 + 10;
let two = 90 / 3;
let three = 50 - 25;
let four =  20 * 5;

console.log(one, two, three, four)

/*
4)
Write a program that takes a first and last name and formats them as follows:
const firstName = "ryan"
const lastName = "curtis"

// do some magic here...
=> "Ryan C."
*/


const firstName = "ryan"
const lastName = "curtis"


console.log((firstName.charAt(0).toUpperCase() + firstName.slice(1)) + " " + (lastName.slice(0, 1).toUpperCase()) + ".")





