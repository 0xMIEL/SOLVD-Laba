const validateObject = (object, validationSchema) => {
    const validateObject = typeof object !== 'object' || object === null
    const validateValidationSchema =
        typeof validationSchema !== 'object' || validationSchema == null

    if (validateObject && validateValidationSchema) return

    for (const key in validationSchema) {
        if (key.includes('_range')) {
            const [keyFirstPart] = key.split('_range')
            if (!object.hasOwnProperty(keyFirstPart)) break
            if (typeof object[keyFirstPart] !== 'number') break
            if (!Array.isArray(validationSchema[key])) break
            const [min, max] = validationSchema[key]
            if (!typeof min === 'number' && !typeof max === 'number') break
            if (object[keyFirstPart] < min || object[keyFirstPart] > max)
                return false
        }
        if (!object.hasOwnProperty(key)) break
        if (typeof object[key] !== validationSchema[key]) return false
    }

    return true
}

const object = {
    name: 'John',
    age: 32,
    email: 'john@example.com',
}

const validationSchema = {
    name: 'string',
    age: 'number',
    email: 'string',
    age_range: [1, 31],
}

console.log(validateObject(object, validationSchema))
