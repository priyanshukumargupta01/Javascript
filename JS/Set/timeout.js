let a =setTimeout(() => {
    console.log("ji")
}, 3000);

clearTimeout(a) //clear internal in variable a

hi=(()=>{
 console.log("hello world")
})

setTimeout(hi,1000)


// let b = setinterval(() => {
//     console.log("ji")
// }, 3000);                   this will be excute the code repeat again and again in 3 second
