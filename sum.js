array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
array2 = [0]
array3 = [2, 2, -4]
array4 = [1, 7, -4, 75 ,23, 7]

function addToZero(arr){
    const sum = arr.reduce((acc, val) => {
        return acc + val;
    }, 0);
    if (sum === 0){
        return true
    }
    return false
}

console.log(addToZero(array))
console.log(addToZero(array2))
console.log(addToZero(array3))
console.log(addToZero(array4))