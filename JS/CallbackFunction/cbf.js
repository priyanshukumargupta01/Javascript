/*const calculate = (a, b, operation) => {
  return operation(a, b);
};

console.log(
  calculate(25, 4, function add(a, j) {
    return a + j;
  }),
);
 */

function sqr(num, action) {
  return action(num);
}

const result = (s) => {
  return s * s;
};

let hi = sqr(7, result);
console.log(hi);
