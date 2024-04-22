const person = {}

Object.defineProperties(person, {
    firstName: {
        value: 'John',
        writable: false,
        enumerable: true,
        configurable: true,
    },
    lastName: {
        value: 'Doe',
        writable: false,
        enumerable: true,
        configurable: true,
    },
    age: {
        value: 30,
        writable: false,
        enumerable: true,
        configurable: true,
    },
    email: {
        value: 'john.doe@example.com',
        writable: false,
        enumerable: true,
        configurable: true,
    },
})

person.updateInfo = function (info) {
    for (const key in info) {
        if (
            Object.hasOwnProperty.call(info, key) &&
            Object.getOwnPropertyDescriptor(this, key).writable
        ) {
            this[key] = info[key]
        } else {
            console.warn(`${key} property isn't writable!`)
        }
    }
}

person.updateInfo({ firstName: 'Jane', age: 32 })

Object.defineProperty(person, 'address', {
    value: {},
    writable: true,
    enumerable: false,
    configurable: false,
})
