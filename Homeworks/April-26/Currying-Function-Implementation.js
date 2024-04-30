const curry = (func, arity, ...args) => {
    if (args.length >= arity) return func(...args)

    return (...moreArgs) => {
        return curry(func, arity, ...args, ...moreArgs)
    }
}

function multiply(a, b, c) {
    return a * b * c
}

const curriedMultiply = curry(multiply, 3)

const step1 = curriedMultiply(2)
const step2 = step1(3)
const result = step2(4)

console.log('Result:', result)
