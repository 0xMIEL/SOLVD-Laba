const stringifyValue = (value) => {
    if (typeof value === 'object' && typeof value !== null) {
        return JSON.stringify(value)
    }

    return String(value)
}

module.exports = { stringifyValue }
