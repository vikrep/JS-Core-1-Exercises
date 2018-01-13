/**
Flatten and sort list of lists

Write a function to make myArray flatten and sorted.

Desired Output;

[1, 2, 5, 7, 8, 9, 12, 15, 20, 30, 50, 72, 81]

*/

var myArrays = [ 333, [ 100, 2, 5, 7 ], [ 87, 9, 122, 15 ], 25014, [ 240, 30, 5, 72, 81] ];


function flattenArray(myArray){
var numbers = [];
for (var i=0; i < myArray.length; i++){
  numbers = numbers.concat(myArray[i]);
};
  mySort(numbers);
  return numbers;
}
console.log(flattenArray(myArrays));

function mySort(numbers) {
  var min = 0;
  for (i = 0; i < numbers.length; i++) {
    min = i;
    for (j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[min]) {
        min = j;
      };
    };
    if (numbers[min] == numbers[i]) {
      continue;
    };
    var k = numbers[i];
    numbers[i] = numbers[min];
    numbers[min] = k;
  };
  return numbers;
};


