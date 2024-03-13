// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const pattern = /[^aeiou]/gi;

  return str.replace(pattern, "").length;
}

module.exports = vowels;

// function vowels(str) {
//   const vowels = "aeiou".split("");

//   return str.split("").filter((c) => vowels.includes(c.toLowerCase())).length;
// }
