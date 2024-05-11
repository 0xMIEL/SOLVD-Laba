// #1

const getArrayIntersection = (firstArray, secondArray) => {
    return firstArray.filter((element, index, array) => {
        if (
            secondArray.indexOf(element) !== -1 &&
            array.indexOf(element) === index
        ) {
            return true
        }
        return false
    })
}

console.log(getArrayIntersection(['a', 33, 'a', 'b'], ['b', 'a', 'c']))

// #2

const getArrayUnion = (firstArray, secondArray) => {
    const newArray = [...firstArray, ...secondArray]
    return newArray.filter(
        (element, index, array) => array.indexOf(element) === index
    )
}

console.log(getArrayUnion(['a', 33, 'a'], ['b', 'a']))
