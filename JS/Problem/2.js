/*. 
   The Double Trouble:
   You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.*/

let arr = [2, 3, 3,5, 44, 55];

function doubleTrouble(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            newArr.push(arr[i]);
        } else {
            newArr.push(arr[i] * 2);
        }
    }

    return newArr;
}

console.log(doubleTrouble(arr));
