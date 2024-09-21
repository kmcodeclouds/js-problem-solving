const firstArr = [2, 4, 3, 2];
const secondArr = [4, 9, 16, 2]

/******************
 * BETTER APPROACH
 ******************/
/**
 * ? BETTER
 * * Time Complexity: O(n), where n is the length of the arrays.This is because building the set takes O(n) and checking membership in a set is O(1) per element.
 * * Space Complexity: O(n), as we're creating a set that stores arr2 elements.
 * 
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * @returns boolean
 * */

const arraysContainSquares3 = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const frequencyMap = {};

    for (let val of arr2) {
        // will update the count of every key of arr2
        frequencyMap[val] = (frequencyMap[val] || 0) + 1
    }

    for (let val of arr1) {
        const squareValue = val ** 2
        if (!frequencyMap[squareValue]) {
            return false
        } else {
            // decrease the value by one means as in arr1 there has 2 two times so it will decrease by 1 equal to zero
            frequencyMap[squareValue]--
        }
    }
    return true
}

console.log("third method==", arraysContainSquares3(firstArr, secondArr));


/******************
 * OPTIMIZE APPROACH
 ******************/
/**
 * ? Optimized
 * * Time Complexity: O(n), where n is the length of the arrays.This is because building the set takes O(n) and checking membership in a set is O(1) per element.
 * * Space Complexity: O(n), as we're creating a set that stores arr2 elements.
 * 
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * @returns boolean
 * */
const arraysContainSquares2 = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const arr2Set = new Set(arr2); // O(n) to build the set

    for (let i = 0; i < arr1.length; i++) {
        if (!arr2Set.has(arr1[i] ** 2)) { // O(1) lookup in the set
            return false;
        }
    }
    return true;
}

console.log("second method==", arraysContainSquares2(firstArr, secondArr));

/**
 ** Time Complexity:
 * The current implementation has a time complexity of O(n²), which is not optimal. Here’s why:
 * The indexOf method is used inside the loop. For each element in arr1, the function searches for its square in arr2 using indexOf, which itself takes O(n) time (where n is the size of arr2).
 * Since the loop runs n times (once for each element in arr1), and indexOf is called for each element, the overall time complexity is O(n) * O(n) = O(n²).
 
 ** Space Complexity:
 * The space complexity is O(1) (constant), as no additional data structures are used that scale with input size. Only a few variables are created regardless of the input size.
 * 
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * @returns boolean
 */
const arraysContainSquares = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i=0; i < arr1.length; i++) {
        const indexOfSquareInArr2 = arr2.indexOf(arr1[i] ** 2)
        if (indexOfSquareInArr2 === -1) {
            return false
        }
    }
    return true
}

console.log("first method==", arraysContainSquares(firstArr, secondArr));




