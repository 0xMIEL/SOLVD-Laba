const convertToNumber = (value) => {
    switch (typeof value) {
        case 'number':
            return value
        case 'string':
            const convertedValue = parseFloat(value)

            if (isNaN(convertedValue)) {
                throw new Error('This cannot be converted!')
            }

            return convertedValue
        case 'boolean':
            return value ? 1 : 0
        case 'object':
            if (value === null) {
                return 0
            }

            if (Array.isArray(value) && value.length === 1) {
                return convertToNumber(value[0])
            }

            throw new Error('This cannot be converted!')
        default:
            throw new Error('This data type cannot be converted!')
    }
}

module.exports = { convertToNumber }
