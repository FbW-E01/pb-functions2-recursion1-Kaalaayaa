// Calculate the sum of natural number up to n
// Write a JavaScript program to compute the sum of an array of integers
const array = [1, 2, 3, 4, 5, 6]
//     sum(array)  // return 21

function sum(array, level = 0){
    if ( array.length === 0){
        return level;
    }

    const  lastNumber = array.pop();
    console.log(array);
    return lastNumber + sum(array);
}

console.log(sum(array));
