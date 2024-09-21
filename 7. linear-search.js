// linear search bascially it searches or finds one by one from left to right

const findLinearWay = (arr, val) => {
    if (!Array.isArray(arr)) {
        throw new Error('First parameter should be an array')
    }

    for (let i in arr) {
        if (arr[i] === val) {
            return i // Return the index if found
        }
    }
    // Return -1 only after the entire array has been checked
    return -1
}

console.log(findLinearWay([22, 32, 45, '4', 2], '4'))