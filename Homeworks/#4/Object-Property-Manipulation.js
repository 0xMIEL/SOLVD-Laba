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
        const exists = Reflect.has(this, key)
        const isWritable = Boolean(
            Object.getOwnPropertyDescriptor(this, key)?.writable
        )

        if (exists && !isWritable) {
            throw Error(`This property property isn't writable!`)
        }

        Reflect.set(this, key, info[key])
    }
}

// person.updateInfo({ firstName: 'Jane', age: 32 })

module.exports = person
