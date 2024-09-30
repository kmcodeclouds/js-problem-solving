


const bubbleSort = (arr) => {
    if (!Array.isArray(arr)) {
        throw Error('Use an Array as param')
    }
    let swapped = false
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j ++ ) {
            // console.log(`=== Checking if ${arr[i]} (index ${i}) > ${arr[j + 1] } (index ${j+1}) and swap them if that is true`)
            if (arr[j] > arr[j+1]) { // it means right element is less than left one 
                const temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
                swapped = true;
            }

        }
    }
    return arr
}


console.log(bubbleSort([1, 47, 13, 40, 40, 9, 25, 22, 47, 0, -23, -5]))