/*5. The Sum Selector:
   You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.
*/

let arr = [6, 8, 0, 6, -8, 9, 4, -8, 4, -9];

function sumSelector() {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      break;
    }
    total += arr[i];
  }

  return total;
}

console.log(sumSelector());
