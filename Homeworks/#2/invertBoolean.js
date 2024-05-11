const invertBoolean = (value) => {
    if (typeof value !== 'boolean') {
        throw new Error('Argument should be of type boolean!')
    }

    return !value
}

module.exports = { invertBoolean }
