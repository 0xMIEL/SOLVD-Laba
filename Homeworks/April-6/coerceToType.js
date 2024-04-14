const coerceToType = (value, type) => {
    switch (type) {
        case 'number':
            if (isNaN(parseFloat(value))) {
                throw new Error('This cannot be converted!')
            }
            return parseFloat(value)
        case 'bigint':
            try {
                return BigInt(parseInt(value))
            } catch (error) {
                throw new Error('This cannot be converted!')
            }
        case 'boolean':
            return Boolean(value)

        case 'string':
            if (typeof value === 'object' && typeof value !== null) {
                return JSON.stringify(value)
            }
            return String(value)
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
