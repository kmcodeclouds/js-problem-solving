const getOddNum = (arr) => {
    const newArr = []
    for (let v of arr) {
        if (v % 2 !== 0) {
            newArr.push(v)
        }
    }
    return newArr
}

console.time('time')
console.log(getOddNum([2, 9, 10, 3, 5, 7, 6, 8, 12, 45, 34, 7, 6, 13, 33, 46, 2, 9, 10, 3, 5, 7, 6, 8, 12, 45, 34, 7, 6, 13, 33, 46]))
console.timeEnd('time')
