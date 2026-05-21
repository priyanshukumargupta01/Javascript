// let name = "Priyanshu"

// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name[2])
// console.log(name[3])
// console.log(name[5])
// console.log(name[8])

// let name1 = "Priyanshu"
// let name2 = "raj"

// // console.log(name1 + name2)
// // console.log(name1.concat(name2))
// // console.log("my name is " + name1 + " and my friend name is " + name2)
// // console.log(`my name is ${name1} and my friend name is ${name2}`)
// // console.log(name1.includes("priyanshu"))
// // console.log(name1.includes("Priyanshu"))
// // console.log(name1.startsWith("P"))
// // console.log(name1.endsWith("u"))
// // console.log(name1.indexOf("a"))
// // console.log(name1.indexOf("z"))
// console.log(name1.slice(4,8))
// console.log(name1.slice(4))


//reverse a string
let name = "Priyanshu" 
let y = "";  
for (let i = name.length - 1; i >= 0; i--) {
    y += name[i];
}
console.log(y)


let str= "Priyanshu Kumar"
let result =""
for(let i = 0; i < str.length; i++){
    if(str[i] !== " "){
        result += str[i]
    }
}
console.log(result)



let name = "Priyanshu"  
console.log(name.slice(0,8))