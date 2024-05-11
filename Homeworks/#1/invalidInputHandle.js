function invalidInputHandle(stringsArray) {
    for (let i = 0; i < stringsArray.length; i++) {
        const string = stringsArray[i]

        if (string[0] === '-') {
            throw Error('The number must be positive!')
        }

        for (let j = 0; j < string.length; j++) {
            if (isNaN(string[j])) {
                throw Error('The number must contain only digits!')
            }
        }
    }
}

module.exports = invalidInputHandle