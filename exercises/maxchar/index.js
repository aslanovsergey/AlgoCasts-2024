// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// O(n log n)
function maxChar(str) {
  const obj = {};

  for (const char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }

  // Descending sort b - a, asc a - b
  const sortedChars = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  // Also we can use for in loop to find max char in such case time complexity would be O(n)

  return sortedChars[0][0];
}

module.exports = maxChar;
