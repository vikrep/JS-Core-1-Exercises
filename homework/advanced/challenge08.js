/* Challenge 8: Paying back a friend

Nadia, Suzie and Katrina live together. They agreed to buy a kettle and three
mugs, and split the cost.

Nadia went to the shop and bought everything. Write a function to help her
figure out how much Suzie and Katrina owe her.

The function should accept the price of a kettle and the price of one of the
mugs, then return the value Suzie owes.

Test your function with different prices to see if it works.
*/
var kettle = 3
0;
var mugs = 5;
var countMugs = 3;
var owe = 0;
function owePrice(kettle, mugs){
    var totalSum = 0;
    var sum = 0;
    for (i = 0; i < countMugs; i++){
       sum = sum + mugs; 
    };
    totalSum = sum + kettle;
    owe = totalSum / 3;
    return owe;
};
console.log("Suzie and Katrina owe to Nadia £" +owePrice(kettle,mugs) +" each.");