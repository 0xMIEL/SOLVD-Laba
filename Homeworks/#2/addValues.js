const addValues = (firstValue, secondValue) => {
    if (typeof firstValue !== typeof secondValue) {
        throw new Error("Don't add other data types!")
    }

    switch (typeof firstValue) {
        case 'number':
        case 'bigint':
        case 'string':
            return firstValue + secondValue
        case 'object':
            if (Array.isArray(firstValue) && Array.isArray(secondValue)) {
                return [...firstValue, ...secondValue]
            }

            if (!Array.isArray(firstValue) && !Array.isArray(secondValue)) {
                return { ...firstValue, ...secondValue }
            }

            throw new Error("Don't add other data types!")
        default:
            throw new Error("Adding doesn't handle such types!")
    }
}

module.exports = { addValues }
