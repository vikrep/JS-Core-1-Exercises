/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"

var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
var str = 'how are you today'
function shortcut(str) {

}
*/


function shortcut(string) {
	console.log(string.replace(/c/gi, ""));
};
shortcut('how are you today?');