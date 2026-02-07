const user = { 
    Name : "happy",
    age : "20",
    education : 12,
    hobbies : "playing",
    lastname:"kumar"
}

const user2 = { 
    Name : "happy",
    age : "20",
    education : 12,
    hobbies : "playing",
    lastname:"kumar"
}


const s1 =""
const s2 =""

console.log(user===user2)
console.log(s1===s2)
//both object has same memory address but in case of string , s1 and s2 booth has same memory address



console.log(user.lastname)

user2.age="3";
console.log(user2)

const user3 = { 
    Name : "happy",
    lastname:"kumar",
    age : "20",
    education :{
        Qualiification : 12,
        hobbies : "playing"
}}


console.log(user3)

