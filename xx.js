let a = 5;
let b = 3;

let x = a.toString(2)
let y = b.toString(2)

console.log("===", x, y)

console.log("===& ", parseInt('110101', 2))

// 110101

// 1 * 2 ^ 0 = 2
// 0 * 2 ^ 1 = 0
// 1 * 2 ^ 2 = 4
// 0 * 2 ^ 3 = 0
// 1 * 2 ^ 4 = 16
// 1 * 2 ^ 5 = 32
// 1 + 0 + 4 + 0 + 16 + 32 = 53