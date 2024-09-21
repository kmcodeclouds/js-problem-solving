const sumOfArr = (arr) => {
    return helper(arr)
}

const helper = (arr, index=0) => {
    if (arr.length === index) {
        return 0
    }
    return arr[index] + helper(arr, index+1)
}

console.log(sumOfArr([5, 9, 20]))





// const func1 = (a) => {
//     return (b) => {
//         return (c) => {
//             return (a*b) + c
//         }
//     }
// } 

// console.log(func1(10)(5)(12))