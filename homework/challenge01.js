/* Challenge 1: Famous Writers

Did you know you can also have an array of objects? We've created one for you
here. Loop through the array, and for each object, `console.log()` out the
sentence:

"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a
{occupation}."

Here is the array:
*/
var writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "Bell",
    lastName: "Hooks",
    occupation: "writer",
    age: 64,
    alive: true
  },
];
var arrayLenght = writers.length
for (i = 0; i < arrayLenght; i++) {
  console.log("Hi, my name is " +writers[i].firstName, " " +writers[i].lastName,
  ". I am " +writers[i].age, " years old, and work as a " +writers[i].occupation, ".")
};

/*
If you want an extra challenge, only `console.log()` the writers that are alive.
*/
