// ---------------------------------------------------------------------------------------------------

// var student = {
//   name: "Simon",
//   age: "21",
//   interests: ["javascript", "react"]
// };
// function printProperties(obj) {
//   for (var key in student) {
//     console.log(key);
//   };
// };
// printProperties(student);
//   // Output in this case should be name, age, interests

// ---------------------------------------------------------------------------------------------------

// var student = {
//   name: "Simon",
//   age: "21",
//   interests: ["javascript", "react"]
// };

// function hasProperty(obj, objName) {
//   var result = false
//   for (var key in student) {
//     if (key === objName) {
//       result = true;
//     } else {
//       continue;
//     };
//   };
//   console.log(result)
// };
// hasProperty(student, "interests"); // should return true
// hasProperty(student, "job"); // should return false

// ---------------------------------------------------------------------------------------------------

// var person = {
//   name: "Simon",
//   surname: "Regont"
// };

// var student = {
//   interests: ["javascript", "react"],
//   isalive: true
// };

// student.__proto__ = person; // this is setting the prototype of student to be person

// function ownProperty(obj, objName) {
//   var result = false;
//   if (obj.hasOwnProperty(objName)) {
//     result = true;
//   };
//   console.log(result);
// };

// ownProperty(student, "name"); // should return false
// ownProperty(student, "interests"); // should return true
// ownProperty(student, "surname");
// ownProperty(student, "isalive");
// console.log(student.__proto__);
// console.log(student);

// ---------------------------------------------------------------------------------------------------

// var student = {
//   name: "Simon",
//   age: "21",
//   interests: ["javascript", "react"]
// };

// function printObject(obj) {
//   console.log("Name is " + obj.name + ", age is " + obj.age + ", interests are " + obj.interests)
// };

// printObject(student); //output: "name is Simon, age is 21, interests are ["javascript", "react"]

// ---------------------------------------------------------------------------------------------------

// var students = [
//   {
//     name: "Etza",
//     age: "21",
//     interests: ["javascript", "css"]
//   },
//   {
//     name: "Mohamed",
//     age: 22,
//     interests: ["javascript", "c#"]
//   }
// ];

// function printArray(arr) {
//   for (i = 0; i < arr.length; i++) {
//     printObject(arr[i]);
//   };
// };
// function printObject(obj) {
//   console.log("Name is " + obj.name + ", age is " + obj.age + ", interests are " + obj.interests)
// };

// printArray(students);


// output:
// "name is Simon, age is 21, interests are ["javascript", "react"]"
// "name is Mohamed, age is 22, interests are ["javascript", "c#"]"

// ---------------------------------------------------------------------------------------------------


// var wallet = {
//   5: 3,
//   10: 7,
//   20: 2
// };

// function summWallet(obj) {
//   var sum = 0
//   for (var key in obj) {
//     sum = sum + (key * obj[key]);
//   };
//   console.log("Total summ in the wallet is £" + sum)
// };

// summWallet(wallet);

// ---------------------------------------------------------------------------------------------------

var walletA = {
  // our original wallet
  5: 3,
  10: 7,
  20: 2
};

var walletB = {
  5: 6,
  10: 0,
  20: 1
};

var wallets = [walletA, walletB];
var sum;

// Write a function - sumWallets - that takes the array wallets and returns the total amount of 
//money for all of the wallets.

function sumWallets(arr) {
  var total = 0
  for (i = 0; i < arr.length; i++) {
    summWallet(arr[i]);
    total = total + sum;
  };
  console.log("Total summ in wallets is £" + total);
};

function summWallet(obj) {
  sum = 0;
  for (var key in obj) {
    sum = sum + (key * obj[key]);
  };
  return sum;
};
//sumWallets(wallets);

// 2 Write another function - combineWallets - that takes the array of wallets and combines all of the
//  notes in each of them, returning a single wallet with all of the other wallets' notes.

function combineWallets(arr) {
  var newWallet = {};
  for (i = 0; i < arr.length; i++) {
    for (var key in arr[i]) {
      if (newWallet[key] == undefined) {
        newWallet[key] = arr[i][key];
      } else {
        newWallet[key] = newWallet[key] + arr[i][key];
      };
    };
  };
  console.log(newWallet)
};
//combineWallets(wallets);

// 3 See if you can write a function - sumDynamicWallet - that will sum up and return the total amount
// in a single wallet, but it could have any number of different notes inside it (£7 note or a £13 or 
// any other number).

var walletC = {
  // our original wallet
  5: 3,
  10: 7,
  7: 20,
  13: 10,
  20: 2,
  25: 5
};

function sumDynamicWallet(obj) {
  var sum = 0
  for (var key in obj) {
    if ((key == 5) || (key == 10) || (key == 20) || (key == 50)) {
      sum = sum + (key * obj[key]);
    } else { continue };
  };
  console.log("Total summ in the wallet is £" + sum)
};

//sumDynamicWallet(walletC);

// 4 See if you can write a function that takes in any number of wallets, which could contain any
// denomination/type of notes inside them (each being different). Tip: have a think about if you 
// could re-use a function from a previous example...

var myArr = [1, 3, 56, 74, 5, 788, 335, 67]
var sum = 0;
function average(arr) {
  arr.forEach(function (item) {
    sum = sum + item;
  });
  return sum / myArr.length;
};
console.log(average(myArr));