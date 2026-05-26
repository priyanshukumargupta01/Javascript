let arr = [4,4,3,2,5,1,2,3,4,5]; 
let arr2 = arr.map(x=>x*2); 
console.log(arr2);


let nam = ["Ali", "Veli", "Ayşe", "Fatma"];
let naam2 = nam.map(x=>x.toUpperCase());
console.log(naam2);


let name = ["Ali", "Veli", "Ayşe", "Fatma"];
let email= name.map(mail=>mail.toLowerCase()+"@gmail.com")
console.log(email);


const celsius = [0, 10, 20, 30, 40];
const fahrenheit = celsius.map((temp) => {
  return (temp * 9/5) + 32;
});
console.log(fahrenheit);



const users = [
  { name: "Priyanshu", age: 20 },
  { name: "Rahul", age: 22 }
]; 
const names = users.map((user) => {
  return user.name;
}); 
console.log(names);


//map
let fruits = ["apple", "banana", "cherry"];
let frut = fruits.map((fruit, index)=>{
    return (index  + " - " + fruit)
})
console.log(frut);


//foreach
const fruit = ["Apple", "Banana", "Mango"]; 
fruit.forEach((fruit, index) => {
  console.log(index + " - " + fruit);
});


//reduce
const numbers = [1, 2, 3, 4]; 
const result = numbers.reduce((acc, curr) => {
  return acc * curr;
}, 1); 
console.log(result);


//filter
const num = [1, 2, 3, 4, 5, 6];
const evenNumbers = num.filter((n) => n % 2 === 0);
console.log(evenNumbers);


//foreach
const num = [1, 2, 3, 4, 5, 6];
num.forEach((n) => {
  if (n % 2 === 0) {
    console.log(n);
  }
});


const names = ["Rahul", "Aman", "Priyanshu", "Ajay"];v
const result = names.filter((name) => {
  return name.length > 4;
});
console.log(result);


const users = [
  { name: "Rahul", active: true },
  { name: "Aman", active:false },
  { name: "Priyanshu", active: true }
]; 
const activeUsers = users.filter((user) => {
  return user.active;
}); 
console.log(activeUsers);


const users = [
  { name: "Rahul", age: 17, active: true },
  { name: "Aman", age: 22, active: false },
  { name: "Priyanshu", age: 20, active: true },
  { name: "Rohit", age: 25, active: true }
];
let result = users.filter((user)=>{
  return user.age > 18 && user.active;
})
console.log(result);



const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Mouse", price: 500 }
];
let result = products.map((product)=>{
  return ("Product: " + product.name + " - " + product.price);
})
console.log(result);



const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Mouse", price: 500 }
];
let result = products.forEach((product)=>{
  console.log("Product: " + product.name + " - " + product.price);
});