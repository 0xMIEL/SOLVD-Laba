const invalidInputHandle = require('./invalidInputHandle')

String.prototype.minus = function (subtrahend) {
    const minuend = this
    let borrow = 0
    let difference = ''
    const tooSmallSubtrahendError = new Error(
        'Parameter must be less than method receiver!'
    )

    invalidInputHandle([minuend, subtrahend])

    if (minuend.length < subtrahend.length) {
        throw tooSmallSubtrahendError
    }

    if (minuend.length === subtrahend.length) {
        for (let i = 0; i < minuend.length; i++) {
            if (minuend[i] > subtrahend[i]) {
                break
            } else if (minuend[i] === subtrahend[i]) {
                continue
            } else {
                throw tooSmallSubtrahendError
            }
        }
    }

    for (let i = minuend.length - 1; i >= 0; i--) {
        const minuendCurrentDigit = parseInt(minuend[i])
        const subtrahendCurrentDigit = parseInt(
            subtrahend[i - (minuend.length - subtrahend.length)] || 0
        )
        const totalNumber =
            minuendCurrentDigit - subtrahendCurrentDigit - borrow
        const finalDigit = totalNumber >= 0 ? totalNumber : totalNumber + 10
        difference = finalDigit + difference
        borrow = totalNumber >= 0 ? 0 : 1
    }

    return difference.replace(/^0*/, '') || '0'
}