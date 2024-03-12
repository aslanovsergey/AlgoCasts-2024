// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// O(a2 + b)
function anagrams(stringA, stringB) {
  const stringALetters = stringA.replace(/[^a-zA-Z]+/, "").toLowerCase();
  const stringBLetters = stringB.replace(/[^a-zA-Z]+/, "").toLowerCase();

  if (stringALetters.length !== stringBLetters.length) {
    return false;
  }

  const charsMapA = {};
  const charsMapB = {};

  for (const char of stringA) {
    charsMapA[char] = (charsMapA[char] || 0) + 1;
  }

  for (const char of stringB) {
    charsMapB[char] = (charsMapB[char] || 0) + 1;
  }

  for (const key in charsMapA) {
    if (charsMapA[key] !== charsMapB[key]) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;

// Another solution could to sort and then compare strings they must me equal
