const person = require('./Object-Property-Manipulation.js')

const logProperty = property => {
    console.log(property)
}

const objectObserver = (target, callbackFn) => {
    const handler = {
        get(target, property, receiver) {
            logProperty(`operation: get, property: ${property}`)
            return Reflect.get(target, property, receiver)
        },
        set(target, propertyKey, value, receiver) {
            logProperty(`operation: set, property: ${propertyKey}`)
            return Reflect.set(target, propertyKey, value, receiver)
        },
    }
    return new Proxy(target, handler)
}

const personProxy = objectObserver(person, logProperty)

personProxy.updateInfo({city: 'London'})

console.log('\n' + personProxy.city)
