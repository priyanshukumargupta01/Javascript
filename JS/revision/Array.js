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



let fruits = ["apple", "banana", "cherry"];
let frut = fruits.map((fruit, index)=>{
    return (index  + " - " + fruit)
})
console.log(frut);



