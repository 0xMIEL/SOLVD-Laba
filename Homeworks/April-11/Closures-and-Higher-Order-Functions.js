// #1

const createCounter = () => {
    let i = 0

    return () => {
        return ++i
    }
}

const counter = createCounter()

console.log(counter()) // 1
console.log(counter()) // 2
console.log(counter()) // ...
console.log(counter())
console.log(counter())

// #2

const repeatFunction = (func, times) => {
    return () => {
        if (times < 0) {
            setInterval(func, 0)
        } else {
            for (let i = 0; i < times; i++) {
                func()
            }
        }
    }
}

const sayHi = () => {
    console.log('Hi!')
}

const repeatSayHi = repeatFunction(sayHi, 4)
repeatSayHi()
