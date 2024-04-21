// #1

const calculateFactorial = (n, accumulator = 1n) => {
    if (n < 1n) {
        return accumulator
    } else {
        return calculateFactorial(n - 1n, accumulator * n)
    }
}

console.log(calculateFactorial(9n))

// #2

const power = (base, exponent, accumulator = 1) => {
    if (exponent === 0) {
        return accumulator
    }

    return power(base, exponent - 1, accumulator * base)
}

console.log(power(19, 7))
