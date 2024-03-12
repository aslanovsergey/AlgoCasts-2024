// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// O(n)
function chunk(array, size) {
  const result = [];

  for (const item of array) {
    const lastItem = result[result.length - 1];

    if (lastItem && lastItem.length < size) {
      lastItem.push(item);
    } else {
      result.push([item]);
    }
  }

  return result;
}

module.exports = chunk;

// O(a*b)
// function chunk(array, size) {
//     const result = [];

//     while (array.length) {
//       const arr = [];
//       for (let i = size; i > 0; i--) {
//         arr.push(array.shift());
//       }
//       result.push(arr);
//     }

//     return result;
//   }

// O(n)?
// function chunk(array, size) {
//     const result = [];
//     let startIndex = 0;

//     while (startIndex < array.length) {
//       const endIndex = startIndex + size;
//       const chunk = array.slice(startIndex, endIndex);
//       result.push(chunk);
//       startIndex = endIndex;
//     }

//     return result;
//   }
