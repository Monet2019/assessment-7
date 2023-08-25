function longestWord(arr){
    newArr = []
    for (i = 0; i < arr.length; i++){
                newArr.push(arr[i].length)
    }
    console.log(Math.max(...newArr))
}


longestWord(['hi', 'hello'])