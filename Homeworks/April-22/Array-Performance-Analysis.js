const measureArrayPerformance = (func, array) => {
    const startTime = Date.now()

    for (let i = 0; i < 100000000; i++) {
        func(array)
    }

    const endTime = Date.now()

    return endTime - startTime
}

const filterArray = array => {
    array.filter(element => {
        element > 10
    })
}

const mapArray = array => {
    array.filter(element => {
        element * 10
    })
}

const reduceArray = array => {
    array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)
}

const functions = [filterArray, mapArray, reduceArray]
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const compareFunctionsEfficiency = (functions, array) => {
    for (const func of functions) {
        console.log(`${func.name}: ${measureArrayPerformance(func, array)}ms`)
    }
}

compareFunctionsEfficiency(functions, numbers)
