/**

Cre­ate a pascal’s tri­an­gle using javascript.

http://www.mathsisfun.com/pascals-triangle.html


- Pascal’s tri­an­gle can be sim­u­lated using 2-D array
- While cre­at­ing 2-D array
- If the ele­ment is the either first or last ele­ment then ini­tial­ize it with 1
- Else ini­tial­ize it with the sum of the ele­ments from pre­vi­ous row

*/

// function pascal(num) {
//   // TODO

// }

// console.log(pascal(5));

var numTiers = 14;

function pascalSimple(numTiers) {

  var triangle = [[1]];
  var tier;

  for (var j = 0; j < numTiers - 1; j++) {
    tier = [1];
    for (var k = 1; k < triangle[j].length; k++) {
      tier[k] = triangle[j][k] + triangle[j][k - 1];
    }
    tier.push(1);
    triangle.push(tier);
  };
  for (var i = 0; i < triangle.length; i++) {
    console.log(triangle[i])
  };
  return triangle;
};

pascalSimple(numTiers);

