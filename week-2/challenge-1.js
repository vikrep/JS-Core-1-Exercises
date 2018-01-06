/**

1- Create your own sort method

https://en.wikipedia.org/wiki/Sorting_algorithm

Desired Output; [ 10, 11, 12, 13, 14, 15, 16 ]

*/

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
var numbers = [12, 10, 15, 11, 9, 13, 16, 19, 25, 3];
mySort(numbers);
console.log(numbers);
