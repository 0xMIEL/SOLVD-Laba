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
String.prototype.minus
String.prototype.divide
String.prototype.multiply

