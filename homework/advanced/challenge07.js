/* Challenge 7: Splitting the bill

Four friends went to dinner together. They agreed to split the bill evenly
between them. This is the bill:

Spaghetti - £7.99
Soup - £6.99
Sandwich x2 - £14.99
Coke x3 - £4.99

Write a function that will accept two arguments. The first argument is an array
of the item costs from the bill:

var bill = [7.99, 6.99, 14.99, 4.99];

The second argument is the number of friends:

var numberOfFriends = 4;

The function should return how much each friend should contribute to the bill.

**Extra credit**: How much should each friend pay if they want to add a 10% tip?
*/
/*var bill = [7.99, 6.99, 14.99, 4.99];
var numberOfFriends = 4;
var sumSplitt = 0;
function splittingBill(bill, numberOfFriends){
    sum = 0;
    for (i = 0; i < bill.length; i++){
        sum += bill[i]; // calculate total summ of bill
    };
    sum = sum + (sum/100*10); // add 10% tip
    sumSplitt = sum / numberOfFriends; // calculate how much each friend should pay
    return(sumSplitt);
};
console.log("Each of friends should pay £" +splittingBill(bill, numberOfFriends));*/
var bill = [7.99, 6.99, [14.99, 14.99], [4.99, 4.99, 4.99]];
var numberOfFriends = 4;
var sumSplitt = 0;
function splittingBill(bill, numberOfFriends){
    sum = 0;
    for (i = 0; i < bill.length; i++){
        if (typeof(bill[i]) == 'number'){
            sum += bill[i]; // calculate total summ of bill   
        };
        for (j = 0; j < bill.length; j++){
            if (typeof(bill[i][j]) == 'number'){
                sum += bill[i][j];
            };
        };
    };
    console.log(sum);
    sum = sum + (sum/100*10); // add 10% tip
    sumSplitt = sum / numberOfFriends; // calculate how much each friend should pay
    return(sumSplitt);
};
console.log("Each of friends should pay £" +splittingBill(bill, numberOfFriends));