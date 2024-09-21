const getLowHighNumber = (arr, getLowValue=true) => {
    if (!Array.isArray(arr)) {
        return 'Please pass the param as an array'
    }

    let highNumber = -Infinity; // -Infinity represents the lowest possible number in JavaScript.
    let lowNumber = Infinity; //Infinity represents the largest possible number in JavaScript.

    for (let num of arr) {

        // continue if num not equal to number
        if (typeof num !== 'number') continue

        // num is greater than the highNumber then assign the latest num to highNumber
        if (num > highNumber) {
            highNumber = num
        }

        // num is lesser than the lowNumber then assign the latest num to lowNumber
        if (num < lowNumber) {
            lowNumber = num
        }
    }
    return getLowValue ? lowNumber : highNumber
    
}

const lowValue = getLowHighNumber(['ee', 23, -90, -4, 45, 58, 20, 2.0]);
const highValue = getLowHighNumber([23, -9, 'error', 40, 4.5, -8, 20, .09], false);


console.log("==", lowValue, highValue)