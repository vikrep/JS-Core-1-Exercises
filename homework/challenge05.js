/* Challenge 5: Ones and Zeros

Write a function `stringy` that takes a size and returns a string of alternating '1s' and '0s'.

The string should start with a 1.

```js
stringy(6) // --> '101010'
stringy(5) // --> '10101'
```

The size will always be positive and will only use whole numbers.
*/
var str = "";
function stringy(x) {
    for ( i = 0; i < x; i++) { 
      if ( i % 2 === 1){
        str += "0";
      }
      else { str += "1"};
    };
    return str
};
console.log(stringy(5));