const invalidInputHandle = require('./invalidInputHandle')

String.prototype.plus = function (secondAddend) {
    let firstAddend = this
    let carry = 0
    let sum = ''
    let maximumLength =
        firstAddend.length > secondAddend.length
            ? firstAddend.length
            : secondAddend.length

    invalidInputHandle([firstAddend, secondAddend])

    for (let i = 0; i < maximumLength || carry; i++) {
        const firstAddendDigit = parseInt(
            firstAddend[firstAddend.length - 1 - i] || 0
        )
        const secondAddendDigit = parseInt(
            secondAddend[secondAddend.length - 1 - i] || 0
        )
        const totalNumber = firstAddendDigit + secondAddendDigit + carry
        const finalDigit = totalNumber % 10
        sum = finalDigit + sum
        carry = totalNumber >= 10 ? 1 : 0
    }

    return sum
}