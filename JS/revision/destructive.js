const now = new Date();
const day = now.getDate();
const month = now.getMonth()+1   ;
const year = now.getFullYear();
const luckyNumber = Math.floor(Math.random()*100)+1;
console.log(`today date is: ${day}/${month}/${year}`)
console.log(`your lucky no. is: ${luckyNumber}`)   




const numbers = [10, 20, 30];
const [a, b, c] = numbers;
console.log(a);
console.log(b);
console.log(c);



const user = {
  name: "Priyanshu",
  age: 20,
  city: "Delhi"
};
const { name, age, city } = user;
console.log(name);
console.log(age);
console.log(city);


const user = {
  name: "Priyanshu",
  skills: ["HTML", "CSS", "JS"]
}; 
const {
  name,
  skills: [firstSkill]
} = user; 
console.log(name);
console.log(firstSkill);