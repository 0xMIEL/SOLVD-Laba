// #1

const lazyMap = (array, mapFunction) => {
    let index = 0
    return {
        next() {
            if (index < array.length) {
                let value = mapFunction(array[index])
                index++
                return { done: true, value }
            } else {
                return { done: true }
            }
        },
    }
}

const doubleArray = lazyMap([3, 7, 13], x => x * 2)

console.log(doubleArray.next().value)
console.log(doubleArray.next().value)

// #2

const fibonacciGenerator = () => {
    let index = 0
    const array = [0, 1]
    return {
        next() {
            let value
            if (index <= 1) {
                value = array[index]
            } else {
                value = array[index - 1] + array[index - 2]
                array.push(value)
            }
            index++
            return { done: false, value }
        },
    }
}

const fib = fibonacciGenerator()

console.log(fib.next().value)
console.log(fib.next().value)

