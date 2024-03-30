const invalidInputHandle = require('./invalidInputHandle')
require('./minus')

String.prototype.divide = function (divisor) {
    const dividend = this
    let quotient = ''
    let temporaryDividend = ''

    if (divisor === '0') {
        throw Error("You musn't divide by zero!")
    }

    invalidInputHandle([dividend, divisor])

    for (let i = 0; i < dividend.length; i++) {
        temporaryDividend += dividend[i]
        let temporaryQuotient = 0

        try {
            while (true) {
                temporaryDividend = temporaryDividend.minus(divisor)
                temporaryQuotient++
            }
        } catch (error) {
            quotient += temporaryQuotient
        }
    }

    return quotient.replace(/^0*/, '') || '0'
}