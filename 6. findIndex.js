// const getIndexValue = (arr, value) => {
//     if (!Array.isArray(arr)) return -1
//     for (let i in arr) {
//         if (arr[i] === value) {
//             return i
//         }
//     }
//     return -1
// }

Array.prototype.getIndexValue = function (callback) {
    for (let i in this) {
        if (callback(this[i], i, this)) {
            return i
        }
    }
    return -1
}

const mainArr = [5, '7', 7, 2, 9, 10, '80', 56]

console.log(mainArr.getIndexValue((item, k, arr) => item === '80'))