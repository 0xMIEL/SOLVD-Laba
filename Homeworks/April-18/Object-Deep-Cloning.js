const x = object => {
    if (typeof object !== 'object' || object === null) return

    let result = {}

    for (const key in object) {
        const value = { [key]: object[key] }
        result = Object.assign({}, result, value)

        if (typeof object[key] !== 'object') {
            result[key] = value
        } else {
            if (object[key] === object) {
                result[key] = Object.assign({}, object)
            } else {
                result[key] = x(object[key])
            }
        }
    }

    return result
}

const nestedObject = {
    a: {
        b: {
            c: {
                d: 10,
            },
        },
    },
    b: {},
}

nestedObject.circ = nestedObject

console.log(x(nestedObject))
console.log(x(nestedObject).circ === nestedObject.circ)
console.log(x(nestedObject).a.b.c === nestedObject.a.b.c)
