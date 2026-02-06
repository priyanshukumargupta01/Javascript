const NameAndNumber = [["happy", "90"], ["Priyanshu", "99"]];

console.log(NameAndNumber[0][1]);


let num = [
    [3, 5, 6],
    [1,5,8],
    [3, 3,5]
]
let sum = 0;

for(let i = 0 ; i<=num.length; i++){
    let result = sum += num[i]
    console.log("Row 1: ",result)
    //  console.log("Row 2: ")
    //   console.log("Row 3: ")
}