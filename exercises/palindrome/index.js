// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split("").every((char, i) => {
        return char === str[str.length - i - 1] 
    })
}

module.exports = palindrome;


// function palindrome(str) {
//     const reversedStr = str.split("").reverse().join("");

//     return str === reversedStr;
// }



// function palindrome(str) {
//     let a = 0;

//     for (let i = str.length - 1; i >= 0; i--) {
//         const char = str[i];
//         if(char !== str[a]) {
//             return false;
//         }

//         if(a === i) {
//             return true;
//         }

//         a++;
//     }

//     return true;
// }