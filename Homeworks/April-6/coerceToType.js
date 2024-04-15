const { convertToNumber } = require('./convertToNumber')
const { stringifyValue } = require('./stringifyValue')

const coerceToType = (value, type) => {
    switch (type) {
        case 'number':
            return convertToNumber(value)

        case 'bigint':
            try {
                return BigInt(parseInt(value))
            } catch (error) {
                throw new Error('This cannot be converted!')
            }

        case 'boolean':
            return Boolean(value)

        case 'string':
            return stringifyValue(value)

        case 'object':
            try {
                return JSON.parse(value)
            } catch (error) {
                throw new Error('This cannot be converted!')
            }
            
        default:
            throw new Error('This data type is not handled')
    }
}

module.exports = { coerceToType }
