// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, level = 1, length = 0) {
  if (n === 0) {
    return "";
  }

  const strLength = length || n * 2 - 1;

  const hashLength = level * 2 - 1;
  const gapLength = (strLength - hashLength) / 2;

  const gap = " ".repeat(gapLength);
  const str = gap + "#".repeat(hashLength) + gap;

  console.log(str);

  if (n > level) {
    pyramid(n, level + 1, strLength);
  }
}

module.exports = pyramid;

// function pyramid(n) {
//   if (n === 1) {
//     console.log("#");
//   }

//   const strLength = n * 2 - 1;

//   for (let row = 1; row <= n; row++) {
//     const hashLength = row * 2 - 1;
//     const gapLength = (strLength - hashLength) / 2;

//     const gap = " ".repeat(gapLength);

//     const str = gap + "#".repeat(hashLength) + gap;

//     console.log(str);
//   }
// }

// function pyramid(n) {
//     if (n === 0) {
//       return "";
//     }

//     const strLength = n * 2 - 1;

//     printLevel(strLength, 1);
//   }

//   function printLevel(strLength, level) {
//     const hashLength = level * 2 - 1;
//     const gapLength = (strLength - hashLength) / 2;

//     const gap = " ".repeat(gapLength);
//     const str = gap + "#".repeat(hashLength) + gap;

//     console.log(str);

//     if (strLength > hashLength) {
//       printLevel(strLength, level + 1);
//     }
//   }
