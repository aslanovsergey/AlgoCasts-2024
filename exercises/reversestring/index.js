// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const result = str.split("").reduce((str, char) => char + str, "");

  return result;
}

module.exports = reverse;

// O(n)
// function reverse(str) {
//     // Instead of split we can use Array.from which also creates array of chars from a string
//     const result = str.split("").reverse().join("");

//     return result;
// }

// O(n)
// function reverse(str) {
//     let result = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         const char = str[i];
//         result += char
//     }

//     return result;
// }

// O(n)?
// function reverse(str) {
//     let result = "";
//     let position = str.length - 1;

//     while (result.length !== str.length) {
//         const char = str[position];
//         result += char;
//         position--
//     }

//     return result;
// }
