let arr =[3, 5,4, 6, 2]

let [a, ,c, ...rest] =arr ;

console.log(a,rest);

// Spread

let arr1 =[3, 5,4, 6, 2]
let obj1 ={...arr1}

console.log(obj1);

function sum(v1, v2, v3){
    return v1 +v2+ v3;
}
console.log(sum(1,5,8));
console.log(sum(...arr1));


let obj2 ={
    name: "pk",
    company: "happy",
    address :" XYZ"

}
console.log({...obj2, name :"hk"})