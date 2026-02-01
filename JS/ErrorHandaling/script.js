let a = prompt("Enter first number")
let b = prompt("Enter second number")

if( isNaN(a) || isNaN(b) ){
    throw SyntaxError("sorry this is not a number and this is not allow")
}

let sum = parseInt(a) + parseInt(b);

console.log("the sum is = ", sum)

function main(){

let x = 2;
try {
    console.log("multiple ", sum*x)
    return true

} catch (error) {
    console.log("error caught")
    return false
}
finally{
     console.log("error caught in final") 
}

}
main()