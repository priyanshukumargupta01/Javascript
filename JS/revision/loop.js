// let g = [1,2,3,4,5];

// for(let i=0; i < g.length; i++){
//     console.log(g[i])
// } 
// for(let i =0; i<=23;i++){
//     console.log(i)
// }



// for(let i = 40; i >= 0; i--){
//     let ii = i;



//     if(i == 20){
//         console.log("Halfway there!")
//     }else{
//         console.log("all is well")
//     }
//     console.log(ii)
// }



// for(let i = 0; i < 30; i++){;
//     for(j=0; j<30; j++){
//     console.log(`the value of i is ${i} and the value of j is ${j}`)
    
//     }
// }



// const fruits = ["Apple", "Banana", "Mango", "Orange",""];
// for(let i = 0; i< fruits.length; i++){
//     console.log(`the index of the fruit is ${i} and the name of the fruit is ${fruits[i]}`)
// }




for(let i = 0; i < 10; i++){
    if(i % 2 == 0){
        console.log(`${i} is an even number`)
    } else if(i === 5){
        console.log(`5 the become 5`)
        break
    }}


let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

let arr = ["A", "B", "C"];

for (let value of arr) {
    console.log(value);
}