// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  printStep(n, n);
}

function printStep(columns, currentRow) {
  if (currentRow > 1) {
    printStep(columns, currentRow - 1);
  }

  const str = "#".repeat(currentRow) + " ".repeat(columns - currentRow);

  console.log(str);
}

module.exports = steps;

// function steps(n) {
//     for (let row = 0; row < n; row++) {
//       let str = "";
//       for (let column = 0; column < n; column++) {
//         if (row >= column) {
//           str += "#";
//         } else {
//           str += " ";
//         }
//       }

//       console.log(str);
//     }
//   }

// function steps(n) {
//     printStep(n, 1);
//   }

//   function printStep(columns, currentRow) {
//     const str = "#".repeat(currentRow) + " ".repeat(columns - currentRow);

//     console.log(str);

//     if (currentRow < columns) {
//       printStep(columns, currentRow + 1);
//     }
//   }
