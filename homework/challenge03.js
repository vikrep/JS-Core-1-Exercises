/* Challenge 3: Needle in a Haystack

Can you find the needle in the haystack?

Write a function `findNeedle()` that takes an array full of junk but containing
one "needle", which you need to find with a for loop.

After your function finds the needle it should return a message (as a string)
that says: `"Found the needle at position x"`, with `x` being the index number
at which you find the needle.

So:
*/
var haystack = ['hay', 'rabbit', 'hat', 'paper', 'needle'];

function findNeedle(haystack) {
    arrayLenght = haystack.length
    for (i = 0; i < arrayLenght; i++ ){
        if (haystack[i] == 'needle'){
            return i
        };
    };
};
console.log("Found the needle at position " +findNeedle(haystack));

/*Should return:

'Found the needle at position 2'
*/
