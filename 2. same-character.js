const getSameCharCount = (str) => {
    const charList = {};

    for (let ch of str) {
        charList[ch] = charList[ch] > 0 ? charList[ch] += 1 : 1
    }
    return charList
}

console.log(getSameCharCount('hello everyone'))