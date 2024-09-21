const numberArr = [12, 34, 46, '76', 45, 80, 27, '66', 34]

// in binary search first of all we have to make the array with sort

const sortedArr = numberArr.map(item => Number(item)).sort((a, b) => a-b)

function getBinarySearchValue (arr, target = 80) {
    let startIndex = 0
    let endIndex = arr.length - 1

    while (startIndex <= endIndex) {
        const midIndex = Math.round((startIndex + endIndex) / 2)
        
        // If middle index of array value equal to target
        if (arr[midIndex] === target) {
            return midIndex
        }

        // if target value greater than midIndex then change the startIndex with midIndex + 1
        if (target > arr[midIndex]) {
            startIndex = midIndex + 1 
        } else {
            // else target value less than midIndex then change the endIndex with midIndex - 1
            endIndex = midIndex - 1
        }
    }
    return -1

}

console.log(getBinarySearchValue(sortedArr, 46))