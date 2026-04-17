const NameAndNumber = [["happy", "90"], ["Priyanshu", "99"]];


console.log(NameAndNumber[0][1]);



function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }

  return sum;
}

console.log(sumArray(arr)); 