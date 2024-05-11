const invalidInputHandle = require('./invalidInputHandle')
require('./plus')

String.prototype.multiply = function (secondMultiplicand) {
    const firstMultiplicand = this
    let multiplier = ''
    let product = '0'

    invalidInputHandle([firstMultiplicand, secondMultiplicand])

    for (let i = secondMultiplicand.length - 1; i >= 0; i--) {
        let digit = parseInt(secondMultiplicand[i])
        for (let j = 0; j < digit; j++) {
            product = product.plus(firstMultiplicand + multiplier)
        }
        multiplier += '0'
    }

    return product
}