//  for loop
for (let i = 1; i <= 3; i++) {
  console.log("for loop:", i);
}

// while loop
let j = 1;
while (j <= 3) {
  console.log("while loop:", j);
  j++;
}

//  do...while loop
let k = 1;
do {
  console.log("do-while loop:", k);
  k++;
} while (k <= 3);

//  for...of loop (array)
const arr = ["A", "B", "C"];
for (let value of arr) {
  console.log("for-of loop:", value);
}

//  for...in loop (object)
const obj = { x: 10, y: 20, z: 30 };
for (let key in obj) {
  console.log("for-in loop:", key, obj[key]);
}
