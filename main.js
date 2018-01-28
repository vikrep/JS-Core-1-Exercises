/*
  We will use this file to add the Code that you will learn in JS-Core Class 1
  Update this file, then run it from the console using the command:

      node class-exercises.js
*/
/*var courseName = "CodeYourfuture";
var courseDuration = 6;
var isHard = false;
console.log(courseName);
console.log(courseDuration);
console.log(isHard);*/

/*
var isHappy = false;
if (isHappy === true) {
  console.log("I'm happy");
} else {
  console.log ("I'm not happy");
}*/

/*var num = 26;
if (num < 0) {
  sign = "negative";
} else { sign = "positive";}
if (num % 2 === 1) {
  console.log(num +" is " +sign +" odd number");
} else {
  console.log(num +" is " +sign +" even number");
}
*/

/*for (var i = 1; i <= 10; i++) {
  console.log(i);
}*/

/*for (var i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}*/

/*for (var i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}*/

/*for (var i = 0; i <= 100; i+=5) {
  //if (i % 5 === 0) {
    console.log(i);
  }*/


/*var sum = 0
for (var i = 1; i <= 100; i++) {
    sum = sum + i;
    console.log(sum);
  }*/

 /*function add(x, y) {
    return x + y;
  }
  ww = add (2, 3)
  console.log(ww);*/

 /* function add(x, y) {
    return x + y;
  }
  console.log(add(2, 3));*/

  /*function multiplay(x, y) {
    return x * y;
  }
  console.log(multiplay(21.00001144, 23563));*/

 /* function addBetween(x, y) {
    var sum = 0
    for (var i = x; i <= y; i++) {
       sum = sum + i;
    }
    return sum
  }
  console.log(addBetween(25, 75));
*/
// var person = {
//   firstName: "Nelson",
//   lastName: "Mandela",
//   occupation: "freedom fighter",
//   age: 95,
//   alive: false
// };
// console.log("Hi, my name is " +person.firstName +" " +person.lastName +". I am " +person.age +" years old, and work as a " +person.occupation +".");

// for (var i = 10; i < 100; i = i + 10) {
//   if (i > 50) {
//       console.log("That's big")
//   } else if (i > 100) {
//       console.log("Winner winner chicken dinner")
//   } else {
//       console.log(i)
//   }
// }
// for (var i=1; i < 20; i++)
// {
//     if (i % 15 == 0)
//         console.log("FizzBuzz");
//     else if (i % 3 == 0)
//         console.log("Fizz");
//     else if (i % 5 == 0)
//         console.log("Buzz");
//     else
//         console.log(i);
// }

var student = {
  name: "Simon",
  age: "21",
  interests: ["javascript", "react"]
};
function printProperties(student) {
// console.log(Object.keys(student))
for (var key in student) {
  if (student.hasOwnProperty(key)) {
      console.log(key + " -> " + student[key]);
  }
}
};
printProperties(student);
// Output in this case should be name, age, interests

