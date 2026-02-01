/*
const obj ={
    name : "pk",
    marks : 33,
    grade : "B"
}

for (const element in obj) {
    console.log(element, obj[element]) 
}
*/

// const votes =["a","b","c","a","c","a"]

// const result = votes.reduce((acc,vote)=>{
//     acc[vote]= (acc[vote] || 0)+ 1;
//     return acc;

// },{})
// console.log(result)

const now = new Date();

const day = now.getDate();
const month = now.getMonth()+1 ;
const year = now.getFullYear();

const luckyNumber = Math.floor(Math.random()*100)+1;

console.log(`today date is: ${day}/${month}/${year}`)
console.log(`your lucky no. is: ${luckyNumber}`)   



