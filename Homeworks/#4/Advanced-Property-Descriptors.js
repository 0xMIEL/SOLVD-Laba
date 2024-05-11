const createImmutableObject = object => {
    if (typeof object === 'object' && object !== null) {
        for (const key in object) {
            Object.defineProperty(object, key, {
                writable: false,
            })
            if (typeof object[key] === 'object' && object[key] !== null) {
                createImmutableObject(object[key])
            }
        }

        return object
    }

    throw Error('Function only accepts objects!')
}

const object = createImmutableObject({
    name: 'John',
    address: {
        city: 'London',
        country: 'Great Britain',
        continent: 'Europe',
        other: {
            f: '1832992'
        }
    },
})

console.log(Object.getOwnPropertyDescriptors(object))
console.log(Object.getOwnPropertyDescriptors(object.address))
console.log(Object.getOwnPropertyDescriptors(object.address.other))
