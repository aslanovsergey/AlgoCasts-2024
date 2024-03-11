// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const revStr = n.toString().split("").reverse().join("");

  return parseInt(revStr) * Math.sign(n);
}

module.exports = reverseInt;

// Best O(1)
// Worst O(n)
// function reverseInt(n) {
//     if(n === 0) {
//         return n;
//     }

//     const str = n.toString();

//     const reversedStr = str.split("").reverse();

//     if(Math.sign(n) === 1) {
//         return parseInt(reversedStr.join(""))
//     } else {
//         return parseInt(`-${reversedStr.join("")}`)
//     }
// }
