function getIndexNumber (callback) {
    if (!Array.isArray(this)) {
        throw new Error('Please use getIndNumber func to an array')
    }
    for (let i in this) {
        if (callback(this[i], i, this)) {
            return i
        }
    }
    return -1
}

Array.prototype.getIndexNumber = getIndexNumber;

const x = [12, '24', 44, 'abcd', '90', 21]

console.log(x.getIndexNumber((item) => item === 'hi'))