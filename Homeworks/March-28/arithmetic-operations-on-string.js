String.prototype.plus = function (secondString) {
    let outcome = ''
    let carry = 0
    let maximumLength =
        this.length > secondString.length ? this.length : secondString.length

    for (let i = 0; i < maximumLength || carry; i++) {
        const firstDigit = parseInt(this[this.length - 1 - i] || 0)
        const secondDigit = parseInt(
            secondString[secondString.length - 1 - i] || 0
        )
        const total = firstDigit + secondDigit + carry
        outcome = (total % 10) + outcome
        carry = total >= 10 ? 1 : 0
    }

    return outcome
}
String.prototype.minus = function (secondString) {
    if (parseInt(this) < parseInt(secondString)) {
        throw new RangeError('Parameter must be less than method receiver!')
    }

    let outcome = ''
    let borrow = 0

    for (let i = this.length - 1; i >= 0; i--) {
        const firstDigit = parseInt(this[i])
        const secondDigit = parseInt(
            secondString[i - (this.length - secondString.length)] || 0
        )
        const total = firstDigit - secondDigit - borrow
        const finalDigit = total >= 0 ? total : total + 10
        outcome = finalDigit + outcome
        borrow = total >= 0 ? 0 : 1
    }

    return outcome[0] === '0' ? outcome.slice(1) : outcome
}

String.prototype.divide = function (divisor) {
    if (divisor === '0') {
        throw new Error('Division by zero')
    }

    let dividend = this
    let quotient = ''
    let tempDividend = ''

    for (let i = 0; i < dividend.length; i++) {
        tempDividend += dividend.charAt(i)
        if (compareStrings(tempDividend, divisor) < 0 && quotient.length > 0) {
            quotient += '0'
            continue
        }

        let tempQuotient = 0
        while (compareStrings(tempDividend, divisor) >= 0) {
            tempDividend = tempDividend.minus(divisor)
            tempQuotient++
            tempDividend = tempDividend.replace(/^0+/, '') || '0' // Remove leading zeros for next comparison.
        }

        quotient += tempQuotient.toString()
    }

    return quotient.replace(/^0+/, '') || '0' // Handle leading zeros or empty result.
}

String.prototype.multiply = function (secondString) {
    let outcome = '0'
    let zeros = ''

    for (let i = secondString.length - 1; i >= 0; i--) {
        let digit = parseInt(secondString[i])
        for (let j = 0; j < digit; j++) {
            outcome = outcome.plus(this + zeros)
        }
        zeros += '0'
    }

    return outcome
}

function compareStrings(num1, num2) {
    // Assuming num1 and num2 are non-negative integers represented as strings.
    num1 = num1.replace(/^0+/, '') // Strip leading zeros
    num2 = num2.replace(/^0+/, '')
    if (num1.length !== num2.length) {
        return num1.length - num2.length
    }
    return num1.localeCompare(num2)
}

console.log(
    '4342344322343242371774332846236436876782346735677268387652367823'.divide(
        '228348843'
    )
)
